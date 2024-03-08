import React from "react";

import Header from "./components/header/Header"
import Categories from "./components/categories/Categories"
import Sort from "./components/sort/Sort"
import PizzaBlock from "./components/pizzaBlock"
import PizzaLoader from "./components/pizzaBlock/PizzaLoader"

import "./scss/app.scss";





function App() {

    const skeletonArr = [...new Array(10)]

    const [pizzas, setPizzas] = React.useState([])
    const [isLoading, setIsloading] = React.useState(true)

    React.useEffect(() => {
        fetch("https://65e9a9c3c9bf92ae3d39d0d6.mockapi.io/pizzas")
            .then((response) => response.json())
            .then((response) => {
                setPizzas(response)
                setIsloading(false)
            })
    }, [])


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
                            isLoading
                                ? skeletonArr.map((_, index) => <PizzaLoader key={index}/>)
                                : pizzas.map((pizza) => <PizzaBlock key={pizza.id}{...pizza}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
