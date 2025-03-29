import {createContext} from "react";

export const UserContext = createContext({
    user: null,
    isAuth: () => {},
    signIn: () => {},
    logOut: () => {}
});
