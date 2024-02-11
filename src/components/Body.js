import cardsFromSwiggy from "../utils/mockData";
import RestuarantCard from "./RestuarantCard";
import { useState } from "react";

const Body = () => {
    //use State variable
    const [listOfRestaurants, setListOfRestraunt] = useState(cardsFromSwiggy)

    return (
        <div className="body">
            <button
                className="btn filter-btn"
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>
                        res.card.card.info.avgRating > 4.1
                    )
                    //reconcile list of restuarants (using React Fiber)
                    setListOfRestraunt(filteredList);
                }}
            >
                Top Rated Restaurants
            </button>
            <div className="res-container">
                {
                    listOfRestaurants.map((restuarant) => (
                        <RestuarantCard key={restuarant.card.card.info.id} resData={restuarant.card.card.info} />

                    ))
                }

            </div>
        </div>
    )
}

export default Body;