import {Header} from "./header/Header.jsx";
import {Footer} from "./footer/Footer.jsx";
import {Cart} from "./cart/cart.jsx";
import {Outlet} from "react-router";

export const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header title={'Header'} />
            <div className="layout-content">
                <Outlet />
            </div>
            <Cart />
            <Footer title={'Footer'}/>
        </div>
    )
}
