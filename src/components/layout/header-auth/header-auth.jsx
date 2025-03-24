import {Button} from "../../shared/components/button/button.jsx";
import {use} from "react";
import {UserContext} from "../../shared/user-context/index.js";

export const HeaderAuth = () => {
    const { user, signIn, logOut } = use(UserContext);
    return (
        <>
            { !user && <Button onClick={() => signIn()}>Войти</Button>}

            { user && (
                <div>
                    { user.name }
                    <hr/>
                    <Button onClick={() => logOut()}>Выйти</Button>
                </div>
            )}
        </>
    )
}
