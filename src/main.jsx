import {createRoot} from "react-dom/client";
import {restaurants} from "../materials/mock.js";

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
    <div className="restaurants-list">
        {restaurants.map(restaurant => {
            return (
                <div className="restaurant-wrapper">
                    <h1 className="restaurant-name">
                        {restaurant.name}
                    </h1>

                    <div className="group">
                        <h3 className="group-name">
                            Меню
                        </h3>
                        <ul className="group-list">
                            {restaurant.menu.map((item) => (<li>{item.name}</li>))}
                        </ul>
                    </div>

                    <div className="group">
                        <h3 className="group-name">
                            Отзывы
                        </h3>
                        <ul className="group-list">
                            {restaurant.reviews.map((item) => (<li>{item.text}</li>))}
                        </ul>
                    </div>
                    <hr/>
                </div>
            )
        })}

    </div>
)
