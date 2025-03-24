import {UserContext as UserContextProvider} from ".";
import {useUser} from "./use-user.jsx";

export const UserContext = ({children}) => {
    const{ user, signIn, logOut } = useUser();

    return (
        <UserContextProvider value={{user, signIn, logOut}}>
            {children}
        </UserContextProvider>
    )
}
