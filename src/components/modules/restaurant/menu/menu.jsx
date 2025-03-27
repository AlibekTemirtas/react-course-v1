import {MenuContainer} from "./menu-container.jsx";

export const Menu = ({menus}) => {
    return (
        <div className="group">
            <h3 className="group-name">
                Меню
            </h3>
            <ul className="group-list">
                {menus.map((id) => (
                    <MenuContainer key={id} id={id}/>
                ))}
            </ul>
        </div>
    )
}
