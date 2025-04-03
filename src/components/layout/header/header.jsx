
import styles from './header.module.scss';
import {AuthButton} from "../auth-button/auth-button.jsx";
import {ThemeToggleButton} from "../../shared/components/theme-toggle-button/theme-toggle-button.jsx";
import {NavLink} from "react-router";
import classNames from "classnames";

export const Header = ({title}) => {
    const isActive = ({ isActive }) => classNames(isActive && styles.linkActive);


    return (
        <header className={styles.header}>
            <div>{title}</div>

            <nav>
                <NavLink to={'/'} className={isActive}>Home</NavLink>
                <NavLink to={'restaurants'} className={isActive}>Restaurants</NavLink>
            </nav>

            <ThemeToggleButton />
            <AuthButton />
        </header>
    )
}
