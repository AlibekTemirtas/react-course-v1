import {Layout} from "../Layout/Layout.jsx";
import {RestaurantPage} from "../Restaurant/restaurant-page.jsx";
import {ScrollProgressBar} from "../Layout/ScrollProgressBar/ScrollProgressBar.jsx";

export const App = () => {
    return (
        <>
            <ScrollProgressBar />
            <Layout>
                <RestaurantPage />
            </Layout>
        </>
    )
}
