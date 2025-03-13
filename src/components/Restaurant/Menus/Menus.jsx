import {Counter} from "../Counter/Counter.jsx";
import {Dish} from "../Dish/Dish.jsx";

export const Menus = ({menus}) => {
    return (
        <div className="group">
            <h3 className="group-name">
                Меню
            </h3>
            <ul className="group-list">
                {menus.map((menu) => (
                    <Dish key={menu.id} menu={menu}/>
                ))}
            </ul>
        </div>
    )
}
