
import styles from './header.module.scss';
import {AuthButton} from "../auth-button/auth-button.jsx";
import {ThemeToggleButton} from "../../shared/components/theme-toggle-button/theme-toggle-button.jsx";
import {NavLink} from "react-router";
import classNames from "classnames";

export const Header = ({title}) => {
    return (
        <header className={styles.header}>
            <div>{title}</div>

            <nav>
                <NavLink to={'/'} className={({ isActive }) => classNames(isActive && styles.linkActive)}>Home</NavLink>
                <NavLink to={'restaurants'} className={({ isActive }) => classNames(isActive && styles.linkActive)}>Restaurants</NavLink>
            </nav>

            <ThemeToggleButton />
            <AuthButton />
        </header>
    )
}
