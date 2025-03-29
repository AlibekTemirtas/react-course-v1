import {NavLink, Outlet} from "react-router";

import styles from './restaurant-tab.module.scss';
import classNames from "classnames";

export const Restaurant = ({restaurant}) => {
    const {name} = restaurant;

    return (
        <div className="restaurant-item">
            <h2 className="restaurant-name">{name}</h2>

            <nav>
                <NavLink to={'menu'} className={({ isActive }) => classNames(isActive && styles.tabActive)}>Menu</NavLink>
                <NavLink to={'reviews'} className={({ isActive }) => classNames(isActive && styles.tabActive)}>Reviews</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}
