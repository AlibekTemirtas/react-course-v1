import {Header} from "./Header/Header.jsx";
import {Footer} from "./Footer/Footer.jsx";

export const Layout = ({children}) => {
    return (
        <div className="layout" style={{'minHeight': '6000px'}}>
            <Header title={'Header'} />
            <div className="layout-content">{children}</div>
            <Footer title={'Footer'}/>
        </div>
    )
}
