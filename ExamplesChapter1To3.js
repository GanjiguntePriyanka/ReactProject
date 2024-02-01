import React from "react"
import { ReactDOM,createRoot } from "react-dom/client"

const element1 = (<h1>Hello 
    world from JSX element</h1>)
const element2=<span>THis is a span JSX element</span>
//To render a JSX element, use camelcase for element names & render directly without <>
// const root = createRoot(document.getElementById("root"))
// root.render(element1)

//Chapter3: PART2
//React Component : Everything in react is a component. eg: button, label, fields etc. Use Capital letter for declaration
//React functional component is a function returning a JSX element
//REACT COMPONENT
const Component1 = ()=>(
        <h1 className="heading">I am a react component</h1>
 )
//To render a react component, use <> when rendering it
// const root = createRoot(document.getElementById("root"))
// root.render(<Component1/>)

//CHAPTER3: PART3
//We can use nested components/elements by calling elements inside components
// / components inside elements / components inside components etc
const componentInElement = (<div>
    {element1}
    <Component1/>
</div>
);
//To render a react element with nested react component - do not use {}, use () instead
// const root = createRoot(document.getElementById("root"))
// root.render(componentInElement)

const ElementInComponent=()=>(
    <div>
        {10+20}
        <Component1></Component1>
    </div>
)
// const root = createRoot(document.getElementById("root"))
// root.render(<ElementInComponent/>)


//Chapter 3: PART4
//You can write Javascript code inside JSX using {}
//Render an (element and a component) inside a component
const Component2 = ()=>(
    <div id="Container">
        <Component1 />
        {20+30}
        <h2>{100+200}</h2>
        {element1}
        <h1 className="heading" id="heading">I am a second react component</h1>
    </div>
)
const root = createRoot(document.getElementById("root"))
root.render(<Component2/>)


//Some examples : JSX
//<a href={"mailto:" + this.props.email}>email</a>
//<img src={ require('./images/image1.jpg') } />
