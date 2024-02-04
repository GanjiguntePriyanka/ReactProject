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
//const resCardStyle={backgroundColor:"yellow"}

const RestuarantCard = (props)=>{
    return(
        <div className="res-card">
            <img className = "res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/121f77969f3c28f1d7cbcb71e7aa23e0"></img>
            <h3>{props.restroName}</h3>
            <h4>{props.starRating}</h4>
            <h4>{props.cuisine}</h4>
            <h4>{props.deliveryTime}</h4>
            <div></div>
        </div>
    )
}


const Body =()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestuarantCard restroName="Biriyani Foods" cuisine = "Indian, Rice" starRating="3.4 stars" deliveryTime="44 min"/>
                <RestuarantCard restroName="KFC" cuisine="British, street food" starRating="4 stars" deliveryTime="22 min"/>
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}


const rootEl = createRoot(document.getElementById("root"))
rootEl.render(<AppLayout />)
