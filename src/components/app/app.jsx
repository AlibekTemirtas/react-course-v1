import {Layout} from "../layout/Layout.jsx";
import {RestaurantPage} from "../modules/restaurant/restaurant-page.jsx";
import {ProgressBar} from "../shared/components/progress-bar/progress-bar.jsx";

import "./app.scss";
import {UserProvider} from "../providers/user-provider/user-provider.jsx";
import {ThemeProvider} from "../providers/theme-provider/theme-provider.jsx";

export const App = () => {
    return (
        <>
            <ThemeProvider>
                <ProgressBar />
                <UserProvider>
                    <Layout>
                        <RestaurantPage />
                    </Layout>
                </UserProvider>
            </ThemeProvider>
        </>
    )
}
