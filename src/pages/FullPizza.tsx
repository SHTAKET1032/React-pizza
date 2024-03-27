import React from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";


const FullPizza: React.FC = () => {

    const {id} = useParams();
    const [pizza, setPizza] = React.useState<{
        imageUrl: string,
        title: string,
        price: string
    }>();

    React.useEffect(() => {
        const fetchPizza = async () =>{
            try {
                const {data} = await axios.get(`https://65e9a9c3c9bf92ae3d39d0d6.mockapi.io/pizzas/${id}`);
                setPizza(data);
            } catch(error) {
                alert("Что-то пошло не так :(");
            }
        }
        fetchPizza();
    }, [])

    
  return(
      <>
          {!pizza ?
              "ЗАГРУЗКА..." :
              <>
                  <img
                      src={pizza.imageUrl}
                      alt="Pizza IMG"
                  />
                  <div>
                      <h2>{pizza.title}</h2>
                      <span>{pizza.price} P</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolor eius eum eveniet laudantium libero nemo non qui quis rem.</p>
                  <Link to="/" className="button button--black">
                      <span>Вернуться назад</span>
                  </Link>
              </>
          }
      </>
  )
}

export default FullPizza;
