import { CDN_URL } from "../utils/constants";

const RestuarantCard = (props) => {

    const { resData } = props;
    const name = resData.name
    const cuisines = resData.cuisines
    const avgRating = resData.avgRating
    const deliveryTime = resData.sla.deliveryTime
    const cloudinaryImageId = resData?.cloudinaryImageId
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL +
                cloudinaryImageId
            }></img>
            <h3>{name}</h3>
            <h4>{avgRating + " Stars"}</h4>
            <h4>{String(cuisines)}</h4>
            <h4>{deliveryTime + " min"}</h4>
            <div></div>
        </div>
    )
}

export default RestuarantCard;