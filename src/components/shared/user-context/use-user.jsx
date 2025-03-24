import {useCallback, useState} from "react";
import {UserModel} from "../models/user-model.js";

export const useUser = () => {
    const [user, setUser] = useState(null);

    const signIn = useCallback(() => {
        setUser(new UserModel('John'));
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
