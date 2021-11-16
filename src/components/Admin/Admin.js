import React, { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../../store/Contexts'
import './Admin.css'

function Admin() {
    const [deliverNo, setDeliverNo] = useState(0)
    const [closedNo, setClosedNo] = useState(0)
    const [users, setUsers] = useState([])
    const [sectionD, setSectionD] = useState('Orders')
    const { firebase } = useContext(FirebaseContext)


    const themeBtn = () => {
        var element = document.getElementById("themeId");
        element.classList.toggle("theme2");
        var ele = document.getElementById("body");
        ele.classList.toggle("body2")
    }

    firebase.firestore().collection(sectionD + 2).doc("dnums").get().then((res) => {
        setDeliverNo(res.data().Number)
        // console.log(res.data());
    })
    firebase.firestore().collection(sectionD + 2).doc("cnums").get().then((res) => {
        setClosedNo(res.data().Numbers)
        // console.log(res);
    }).catch((error) => {
        console.log(error.message);
    })
    useEffect(() => {
        firebase.firestore().collection(sectionD).get().then((snapshot) => {
            const alldocs = snapshot.docs.map((user) => {
                return {
                    ...user.data(),
                    id: user.id
                }
            })
            setUsers(alldocs)
        })
    })


    let arrpri = []
    users.forEach((num) => arrpri = [...arrpri, num.Price])
    let recpri = 0
    users.forEach((num) => num.Paid ? recpri += num.Price : null)





    return (
        <div>
            <div className="AdminDiv">
                <h1>Admin Monitor Page</h1>
                <button id="themeId" onClick={themeBtn} className="theme"><div></div></button>
                <div className="option">
                    <select name="section" value={sectionD} onChange={(e) => { (setSectionD(e.target.value)) }} id="section">
                        <option value="Orders">Select your Section</option>
                        <option value="Orders-plassanal">Plassanal</option>
                        <option value="Orders-Panakkapalam">Panakkapalam</option>
                        <option value="Orders-Place3">Place 3</option>
                        <option value="Orders-Place4">Place 4</option>
                    </select>
                </div>

                <div className="dataDiv">
                    <div className="data T-Order">
                        <h2>Total Orders</h2>
                        <input type="text" value={users.length} disabled />
                    </div>
                    <div className="data D-Order">
                        <h2>Delivered Orders</h2>

                        <input type="text" value={deliverNo} disabled />

                    </div>
                    <div className="data C-Order">
                        <h2>Closed Orders</h2>
                        <input type="text" value={closedNo} disabled />
                    </div>
                </div>

                <div className="dataCollection">
                    <table id="dataTable">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Phone No</th>
                                <th>House</th>
                                <th>Address</th>
                                <th>Section</th>
                                <th style={{ padding: "0rem 6rem" }}>Items</th>
                                <th>Total Rs.</th>
                                <th style={sectionD === "Orders" ? { display: "none" } : null}>Delivered ?</th>
                                <th style={sectionD === "Orders" ? { display: "none" } : null}>Paid</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => {
                                // console.log(user.Paid);

                                return (<tr key={index} >
                                    <td>{index + 1}</td>
                                    <td>{user.CreatedDate}</td>
                                    <td>{user.Name}</td>
                                    <td>{user.Phone_No}</td>
                                    <td>{user.House_name}</td>
                                    <td>{user.Address}</td>
                                    <td>{user.Section}</td>
                                    <td>{user.Items.map((obj, index) => {
                                        return (
                                            <li key={index} style={{ listStyle: "none" }}>{index + 1} {" "} {obj.items} ({obj.kg}) [{obj.nos}]</li>
                                        )
                                    })}</td>
                                    <td>{user.Price}</td>
                                    {/* {user.Paid ? myFun : null} */}
                                    <td style={sectionD === "Orders" ? { display: "none" } : null}>{user.Deliverd ? "Yes" : "No"}</td>
                                    <td style={sectionD === "Orders" ? { display: "none" } : null}>{user.Paid ? "Yes" : "No"}</td>
                                </tr>)

                            })}
                        </tbody>
                    </table>
                    <div className="table" style={{ marginTop: "5rem", position: "absolute", width: "calc(100% - 6rem)" }}>
                        <h2 style={{ margin: "2rem" }}>Summary of Orders</h2>
                        <table className="summeryTable">
                            <thead>
                                <tr>
                                    <th>Grand Total</th>
                                    <th style={sectionD === "Orders" ? { display: "none" } : null}>Received</th>
                                    <th style={sectionD === "Orders" ? { display: "none" } : null}>To be Received</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ textAlign: "center" }}>{arrpri.reduce((a, b) => a + b, 0)}</td>
                                    <td style={sectionD === "Orders" ? { display: "none" } : { textAlign: "center" }}>{recpri}</td>
                                    <td style={sectionD === "Orders" ? { display: "none" } : { textAlign: "center" }}>{arrpri.reduce((a, b) => a + b, 0) - recpri}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="printBtnDiv"><button className="printBtn" onClick={window.print}>Print</button></div>
            </div>
        </div>
    )
}

export default Admin