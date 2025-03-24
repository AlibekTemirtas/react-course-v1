
import styles from './header.module.scss';
import {HeaderAuth} from "../header-auth/header-auth.jsx";

export const Header = ({title}) => {
    return (
        <header className={styles.header}>
            <div>{title}</div>

            <HeaderAuth />
        </header>
    )
}
