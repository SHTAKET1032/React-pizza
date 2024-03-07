import React from "react";

import Header from "./components/header/Header"
import Categories from "./components/categories/Categories"
import Sort from "./components/sort/Sort"
import PizzaBlock from "./components/pizzaBlock/PizzaBlock"

import "./scss/app.scss";

import  pizzas from "./assets/pizzas.json"





function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {
                            pizzas.map((pizza) => (
                                <PizzaBlock
                                    // img={pizza.imageUrl}
                                    // title={pizza.title}
                                    // types={pizza.types}
                                    // sizes={pizza.sizes}
                                    // price={pizza.price}
                                    {...pizza}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
