import React from "react";
import {Routes, Route} from "react-router-dom"

import Header from "./components/header/Header"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import NotFound from"./pages/NotFound"


import "./scss/app.scss";


export const SearchContext = React.createContext()


function App() {

    const [inputValue, setInputValue] = React.useState("")


    return (
        <SearchContext.Provider value={{inputValue, setInputValue}}>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </SearchContext.Provider>
    )
}

export default App;
