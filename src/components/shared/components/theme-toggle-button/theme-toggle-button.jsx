import {Button} from "../button/button.jsx";
import {use} from "react";
import {ThemeContext} from "../../../context/theme-context/theme-context.jsx";

export const ThemeToggleButton = () => {
    const { theme, toggleTheme } = use(ThemeContext);

    return (
        <Button onClick={toggleTheme}>
            { theme }
        </Button>
    )
}
