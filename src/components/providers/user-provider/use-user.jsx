import {useCallback, useMemo, useState} from "react";
import {normalizedUsers} from "../../../../materials/normalized-mock.js";

export const useUser = () => {
    const [user, setUser] = useState(null);
    const _user = normalizedUsers[0];

    const signIn = useCallback(() => {
        setUser({ ..._user });
    }, []);

    const logOut = useCallback(() => {
        setUser(null);
    }, []);

    const isAuth = useMemo(() => {
        return !!user
    }, [user]);

    return {
        user,
        isAuth,
        signIn,
        logOut
    }
}
