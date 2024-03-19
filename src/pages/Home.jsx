import React from "react";
import axios from "axios"

import {SearchContext} from "../App"

import {useSelector, useDispatch} from "react-redux"
import {setCategoryId} from "../redux/slices/filterSlice"

import Categories from "../components/categories/Categories"
import Sort from "../components/sort/Sort"
import PizzaBlock from "../components/pizzaBlock/PizzaBlock"
import PizzaLoader from "../components/pizzaBlock/PizzaLoader"


const Home = () => {

    const categoryId = useSelector((state) => state.filter.categoryId)
    const dispatch = useDispatch()
    const sortingType = useSelector((state) => state.filter.sortingType)
    const [data, setData] = React.useState([])
    const [isLoading, setIsloading] = React.useState(true)
    const {inputValue} = React.useContext(SearchContext)


    const onClickCategory = (id) => {
        dispatch(setCategoryId(id))
    }


    React.useEffect(() => {


        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sortBy = sortingType.sortProperty.replace("-", "");
        const order = sortingType.sortProperty.includes("-") ? "asc" : "desc";
        const search = `&search=${inputValue}`;

        async function fetchData(){
            try{
                setIsloading(true);

                const dataResponse = await axios.get(`https://65e9a9c3c9bf92ae3d39d0d6.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}${search}`)

                setIsloading(false);
                setData(dataResponse.data)
            } catch (error) {
                alert("Ошибка при запросе данных ;(");
                console.error(error);
            }
        }
        fetchData();
    }, [categoryId, sortingType, inputValue])


    const loader = [...new Array(10)].map((_, index) => <PizzaLoader key={index}/>);
    const pizzas = data.map((item) => <PizzaBlock key={item.id}{...item}/>);


    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? loader : pizzas}
            </div>
        </>
    )
}

export default Home;
