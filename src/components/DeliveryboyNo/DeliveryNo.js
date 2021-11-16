import React from 'react'
import DownArrow from '../../assets/DownArrow'
import './DeliveryNo.css'

function DeliveryNo() {
     const showNum = () => { if (document.getElementById("num").style.display === "none") { document.getElementById("num").style.display = "block" } else { document.getElementById("num").style.display = "none" } }
     const showNum2 = () => { if (document.getElementById("num2").style.display === "none") { document.getElementById("num2").style.display = "block" } else { document.getElementById("num2").style.display = "none" } }
     const showNum3 = () => { if (document.getElementById("num3").style.display === "none") { document.getElementById("num3").style.display = "block" } else { document.getElementById("num3").style.display = "none" } }
     const showNum4 = () => { if (document.getElementById("num4").style.display === "none") { document.getElementById("num4").style.display = "block" } else { document.getElementById("num4").style.display = "none" } }
    // let i = 264
    // function backFunc() {
    //     const ele = document.getElementsByClassName("number-container")
    //     // console.log(ele);
    //     ele[0].scrollLeft = i
    //     i = i + 264
    // }
    return (
        <div>
            <div className="img">
                <div className="parentDivDeliveryNo">
                    <div className="main">
                        <h1>Delivery boys No.</h1>

                        <div className="numbers">
                            <h2>Section vice</h2>
                            <div className="headall">
                                <div className="head">
                                    <li onClick={showNum}>Plassanal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<DownArrow></DownArrow></li>
                                </div>
                                <div id="num" style={{ display: "none" }}>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                </div>
                                <div className="head">
                                    <li onClick={showNum2}>Panakaplam&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<DownArrow></DownArrow></li>
                                </div>
                                <div id="num2" style={{ display: "none" }}>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                </div>
                                <div className="head">
                                    <li onClick={showNum3}>Place3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<DownArrow></DownArrow></li>
                                </div>
                                <div id="num3" style={{ display: "none" }}>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                </div>
                                <div className="head">
                                    <li onClick={showNum4}>Place4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<DownArrow></DownArrow></li>
                                </div>
                                <div id="num4" style={{ display: "none" }}>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                </div>
                            </div>
                            {/* <button onClick={backFunc}>b</button>
                            <div id="cont1" className="number-container">
                                <div className="container2">
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                </div>
                                <div className="container2">
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                </div>
                                <div className="container2">
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                </div>
                                <div className="container2">
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                    <li><a href="tel:0123456987">0123456987 - Name</a></li>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryNo
