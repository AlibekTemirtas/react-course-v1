import {UserContext} from "../../context/user-context/user-context.jsx";
import {useUser} from "./use-user.jsx";

export const UserProvider = ({children}) => {
    const{ user, signIn, logOut } = useUser();

    return (
        <UserContext value={{user, signIn, logOut}}>
            {children}
        </UserContext>
    )
}
