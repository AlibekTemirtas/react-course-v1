import {Layout} from "../layout/Layout.jsx";
import {RestaurantPage} from "../modules/restaurant/restaurant-page.jsx";
import {ProgressBar} from "../shared/components/progress-bar/progress-bar.jsx";

import "./app.scss";

export const App = () => {
    return (
        <>
            <ProgressBar />
            <Layout>
                <RestaurantPage />
            </Layout>
        </>
    )
}
