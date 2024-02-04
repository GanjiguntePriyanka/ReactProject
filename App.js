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

const RestuarantCard = ()=>{
    return(
        // <div className="res-card" style={resCardStyle}>
        // <div className="res-card" style={{backgroundColor:"yellow"}}>
        <div className="res-card">
            <img className = "res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/121f77969f3c28f1d7cbcb71e7aa23e0"></img>
            <h3>Biriyani Foods</h3>
            <h4>3.4 stars</h4>
            <h4>Indian, Rice</h4>
            <h4>35 min</h4>
            <div></div>
        </div>
    )
}


const Body =()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestuarantCard/>
                <RestuarantCard/>
                <RestuarantCard/>
                <RestuarantCard/>
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
