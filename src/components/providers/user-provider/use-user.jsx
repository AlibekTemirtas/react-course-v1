import {useCallback, useState} from "react";

export const useUser = () => {
    const [user, setUser] = useState(null);

    const signIn = useCallback(() => {
        setUser({ name: 'John' });
    }, []);

    const logOut = useCallback(() => {
        setUser(null);
    }, []);

    return {
        user,
        signIn,
        logOut
    }
}
