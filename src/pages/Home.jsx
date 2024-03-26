import React from "react";
import {useSelector, useDispatch} from "react-redux"
import {setCategoryId} from "../redux/slices/filterSlice"
import {fetchPizzas} from "../redux/slices/pizzaSlice";

import Categories from "../components/categories/Categories"
import Sort from "../components/sort/Sort"
import PizzaBlock from "../components/pizzaBlock/PizzaBlock"
import PizzaLoader from "../components/pizzaBlock/PizzaLoader"


const Home = () => {

    const dispatch = useDispatch();
    const valueForSearch = useSelector((state) => state.filter.valueForSearch);
    const categoryId = useSelector((state) => state.filter.categoryId);
    const sortingType = useSelector((state) => state.filter.sortingType);
    const {data, status} = useSelector((state) => state.pizza);


    const onClickCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const getPizzas = async () => {
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sortBy = sortingType.sortProperty.replace("-", "");
        const order = sortingType.sortProperty.includes("-") ? "asc" : "desc";
        dispatch(fetchPizzas({category, sortBy, order, valueForSearch}));
    }


    React.useEffect(() => {
        getPizzas();
    }, [categoryId, sortingType, valueForSearch])


    const loader = [...new Array(10)].map((_, index) => <PizzaLoader key={index}/>);
    const pizzas = data.map((item) => <PizzaBlock key={item.id}{...item}/>);


    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {status === "error" ? (
                <div className="content_error-info">
                    <h2>Произошла ошибка 😕 </h2>
                    <p>Попробуйте чуть позже</p>
                </div>) : (
                <div className="content__items">
                    {status === "loading" ? loader : pizzas}
                </div>
            )}
        </>
    )
}

export default Home;
