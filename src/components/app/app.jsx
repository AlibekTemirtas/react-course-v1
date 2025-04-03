import {Layout} from "../layout/Layout.jsx";
import {RestaurantPage} from "../modules/restaurant/restaurant-page.jsx";
import {ProgressBar} from "../shared/components/progress-bar/progress-bar.jsx";

import "./app.scss";
import {UserProvider} from "../providers/user-provider/user-provider.jsx";
import {ThemeProvider} from "../providers/theme-provider/theme-provider.jsx";
import {Provider} from "react-redux";
import {store} from "../../redux/store.js";
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import {HomePage} from "../modules/home/home-page.jsx";
import {RestaurantsPage} from "../modules/restaurants/restaurants-page.jsx";
import {MenuPage} from "../modules/menus/menu-page.jsx";
import {ReviewsPage} from "../modules/reviews/reviews-page.jsx";
import {DishPage} from "../modules/dish/dish-page.jsx";

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <ProgressBar />
                <UserProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<Layout/>}>
                                <Route index element={<HomePage />} />
                                <Route path='/restaurants' element={<RestaurantsPage />} >
                                    <Route path=':id' element={<RestaurantPage />} >
                                        <Route index element={<Navigate to='menu' replace />} />
                                        <Route path='menu' element={<MenuPage />} />
                                        <Route path='reviews' element={<ReviewsPage />} />
                                    </Route>
                                </Route>
                                <Route path='/dish/:id' element={<DishPage />} />
                                <Route path='*' element={<Navigate to='/' replace />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </UserProvider>
            </ThemeProvider>
        </Provider>
    )
}
