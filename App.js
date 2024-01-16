import React from "react"
//ReactDOM.createRoot was throwing issues. importing createRoot & using createRoot fixed this issue
//Also removed starting point from packages.json

import { ReactDOM,createRoot } from "react-dom/client"

const element = React.createElement("h1",{"id":"h1Value"},"Hello world from React !")
const root = createRoot(document.getElementById("root"))
root.render(element)