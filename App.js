import React from "react"
import { ReactDOM, createRoot } from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const rootEl = createRoot(document.getElementById("root"))
rootEl.render(<AppLayout />)
