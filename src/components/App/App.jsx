import {restaurants} from "../../../materials/mock.js";
import {Layout} from "../Layout/Layout.jsx";
import {Reviews} from "../Reviews/Reviews.jsx";
import {Counter} from "../Counter/Counter.jsx";

export const App = ({title}) => {
    if (!title) {
        return null;
    }

    return (
        <Layout>
            <div className="restaurants-list">
                <h1>{title}</h1>
                {restaurants.map(({name, menu, reviews, id}) =>
                    (
                        <div className="restaurant-wrapper" key={id}>
                            <h2 className="restaurant-name">
                                {name}
                            </h2>

                            <div className="group">
                                <h3 className="group-name">
                                    Меню
                                </h3>
                                <ul className="group-list">
                                    {menu.map(({name}) => (<li key={name}>{name}</li>))}
                                </ul>
                            </div>

                            {reviews?.length ? <Reviews reviews={reviews} /> : 'No reviews'}
                            <Counter />
                            <hr/>
                        </div>
                    )
                )}
            </div>
        </Layout>
    )
}
