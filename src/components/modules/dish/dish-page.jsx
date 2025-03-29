import {useNavigate, useParams} from "react-router";
import {useSelector} from "react-redux";
import {selectDishById} from "../../../redux/entities/restaurant/dish-slice.js";
import {Dish} from "../restaurant/dish/dish.jsx";

export const DishPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const menu = useSelector((state) => selectDishById(state, id));

    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <Dish key={id} menu={menu}/>
        </div>
    )
}
