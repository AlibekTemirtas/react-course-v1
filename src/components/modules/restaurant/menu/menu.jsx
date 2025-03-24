import {Dish} from "../dish/Dish.jsx";

export const Menu = ({menus}) => {
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
