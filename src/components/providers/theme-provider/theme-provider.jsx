import {ThemeContext} from "../../context/theme-context/theme-context.jsx";
import {useTheme} from "./use-theme.jsx";

export const ThemeProvider = ({children}) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <ThemeContext value={{theme, toggleTheme}}>
            {children}
        </ThemeContext>
    )
}
