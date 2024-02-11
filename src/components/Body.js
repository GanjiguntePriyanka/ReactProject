import cardsFromSwiggy from "../utils/mockData";
import RestuarantCard from "./RestuarantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    cardsFromSwiggy.map((restuarant) => (
                        <RestuarantCard key={restuarant.card.card.info.id} resData={restuarant.card.card.info} />

                    ))
                }

            </div>
        </div>
    )
}

export default Body;