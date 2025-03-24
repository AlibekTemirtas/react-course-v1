import {Layout} from "../layout/Layout.jsx";
import {RestaurantPage} from "../modules/restaurant/restaurant-page.jsx";
import {ProgressBar} from "../shared/components/progress-bar/progress-bar.jsx";

import "./app.scss";
import {UserContext} from "../shared/user-context/user-context.jsx";

export const App = () => {
    return (
        <>
            <ProgressBar />
            <UserContext>
                <Layout>
                    <RestaurantPage />
                </Layout>
            </UserContext>
        </>
    )
}
