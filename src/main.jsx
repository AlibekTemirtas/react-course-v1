import {createRoot} from "react-dom/client";
import {restaurants} from "../materials/mock.js";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
    <div className="restaurants-list">
        {restaurants.map(({name, menu, reviews}) => {
            return (
                <div className="restaurant-wrapper">
                    <h2 className="restaurant-name">
                        {name}
                    </h2>

                    <div className="group">
                        <h3 className="group-name">
                            Меню
                        </h3>
                        <ul className="group-list">
                            {menu.map(({name}) => (<li>{name}</li>))}
                        </ul>
                    </div>

                    <div className="group">
                        <h3 className="group-name">
                            Отзывы
                        </h3>
                        <ul className="group-list">
                            {reviews.map(({text}) => (<li>{text}</li>))}
                        </ul>
                    </div>
                    <hr/>
                </div>
            )
        })}

    </div>
)
