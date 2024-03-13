import React from "react";
import {Routes, Route} from "react-router-dom"

import Header from "./components/header/Header"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import NotFound from"./pages/NotFound"


import "./scss/app.scss";





function App() {

    const [inputValue, setInputValue] = React.useState("")
    console.log("FROM APP",inputValue)

    return (
        <div className="wrapper">
            <Header inputValue={inputValue} setInputValue={setInputValue}/>
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home inputValue={inputValue}/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App;
