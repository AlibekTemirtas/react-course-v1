import {Button} from "../../shared/components/button/button.jsx";
import {use} from "react";
import {UserContext} from "../../context/user-context/user-context.jsx";

export const AuthButton = () => {
    const { user, isAuth, signIn, logOut } = use(UserContext);

    return (
        <div>
            { isAuth ?
                <div>
                    { user.name }
                    <hr/>
                    <Button onClick={logOut}>Выйти</Button>
                </div>
            : <Button onClick={signIn}>Войти</Button> }
        </div>
    )
}
