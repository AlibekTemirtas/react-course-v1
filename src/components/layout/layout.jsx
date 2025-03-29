import {Header} from "./header/Header.jsx";
import {Footer} from "./footer/Footer.jsx";
import {Cart} from "./cart/cart.jsx";

export const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header title={'Header'} />
            <div className="layout-content">{children}</div>
            <Cart />
            <Footer title={'Footer'}/>
        </div>
    )
}
