import React, { useState } from 'react'
import './Header.css'
import Arrow from '../../assets/Arrow'
import Menu from '../../assets/Menu'
import Times from '../../assets/Times'
import { useHistory } from 'react-router'
function Header() {
    const [menuBtn, setMenuBtn] = useState(<Menu></Menu>)
    const height = window.screen.height
    const history = useHistory()
    const menuFunction = () => {
        console.log(menuBtn.type.name);
        if (menuBtn.type.name === "m") {
            setMenuBtn(<Times></Times>);
            document.getElementById("menu").style.top = "0px";
        } else {
            setMenuBtn(<Menu></Menu>);
            document.getElementById("menu").style.top = "-208px";
        }
    }
    const scrollScreen = () => {
        window.scrollBy(0, height)
    }
    const scrollScreen2 = () => {
        window.scrollBy(0, height + height + 200)
    }
    const funC = () => history.push('/admin')
    return (
        <div>
            <div className="home">
                <div className="header">
                    <div className="headerChild">
                        <div className="logo">
                            <div onClick={funC} src="" alt="" />
                        </div>
                        <div id="menu" >
                            <p onClick={scrollScreen}>Order</p>
                            <p onClick={scrollScreen2}>Cakes</p>
                            <p href="/">About</p>
                            <p href="/">Contact</p>
                        </div>
                        <div className="menubtn" onClick={menuFunction}>{menuBtn}</div>
                    </div>
                </div>
                <div className="intro">
                    <div className="intromsg">
                        <h1>Get Your order Now !</h1>
                        <button onClick={scrollScreen}><Arrow></Arrow></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
