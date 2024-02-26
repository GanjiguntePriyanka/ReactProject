import cardsFromSwiggy from "../utils/mockData";
import RestuarantCard from "./RestuarantCard";
import { useEffect, useState } from "react";

const Body = () => {
  //use State variable
  const [listOfRestaurants, setListOfRestraunt] = useState()


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const restAllData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9063433&lng=77.5856825&collection=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
    const jsonData = await restAllData.json()
    const dataCards = jsonData?.data?.cards.splice(3) //remove first 3 items from array
    setListOfRestraunt(getRes(dataCards))
  }

  const getRes = (dataCards) => {
    let resList = new Array()
    for (let i = 0; i < dataCards.length; i++) {
      resList.push(dataCards[i].card.card.info)
    }
    return resList;
  }

  return (
    <div className="body">
      <button
        className="btn filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter((res) =>
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
            <RestuarantCard key={restuarant.id} resData={restuarant} />
          ))
        }

      </div>
    </div>
  )
}

export default Body;