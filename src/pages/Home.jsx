import React from "react";

import Categories from "../components/categories/Categories"
import Sort from "../components/sort/Sort"
import PizzaBlock from "../components/pizzaBlock/PizzaBlock"
import PizzaLoader from "../components/pizzaBlock/PizzaLoader"
import Pagination from "../components/paginationBlock/PaginationBlock"



const Home = ({inputValue}) => {


    const [data, setData] = React.useState([])
    const [isLoading, setIsloading] = React.useState(true)
    const [categoryId, setCategoryId] = React.useState(0)
    const [sortingType, setSortingType] = React.useState({
        name: "популярности (DESC)",
        sortProperty: "rating"
    })
    const [selectedPage, setSelectedPage] = React.useState(1)



    React.useEffect(() => {
        setIsloading(true)

        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sortBy = sortingType.sortProperty.replace("-", "");
        const order = sortingType.sortProperty.includes("-") ? "asc" : "desc";
        const search = `&search=${inputValue}`;

        fetch(`https://65e9a9c3c9bf92ae3d39d0d6.mockapi.io/pizzas?page=${selectedPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`)
            .then((response) => response.json())
            .then((response) => {
                setData(response)
                setIsloading(false)
            })
        console.log("СРАБОТАЛ USEEFFECT")
    }, [categoryId, sortingType, inputValue, selectedPage])


    const loader = [...new Array(10)].map((_, index) => <PizzaLoader key={index}/>);
    const pizzas = data.map((item) => <PizzaBlock key={item.id}{...item}/>);


    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)}/>
                <Sort value={sortingType} setSortingId={(i) => setSortingType(i)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? loader : pizzas}
            </div>
            <Pagination handleClick={(nmb) => setSelectedPage(nmb)}/>
        </>
    )
}

export default Home;
