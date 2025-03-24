import {useCallback, useState} from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }, []);

    return {
        theme,
        toggleTheme
    }
}
