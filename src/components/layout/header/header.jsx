
import styles from './header.module.scss';
import {AuthButton} from "../auth-button/auth-button.jsx";
import {ThemeToggleButton} from "../../shared/components/theme-toggle-button/theme-toggle-button.jsx";

export const Header = ({title}) => {
    return (
        <header className={styles.header}>
            <div>{title}</div>

            <ThemeToggleButton />
            <AuthButton />
        </header>
    )
}
