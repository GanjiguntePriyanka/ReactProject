import React from "react"
import { ReactDOM, createRoot } from "react-dom/client"



const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img id="img" src="https://seeklogo.com/images/C/creative-food-company-logo-2DFFD76692-seeklogo.com.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
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
