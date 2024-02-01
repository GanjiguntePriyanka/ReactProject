import React from "react"
import { ReactDOM, createRoot } from "react-dom/client"



const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png"></img>
            </div>
            <div className="nav-container">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>

    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
        </div>
    )
}


const rootEl = createRoot(document.getElementById("root"))
rootEl.render(<AppLayout />)
