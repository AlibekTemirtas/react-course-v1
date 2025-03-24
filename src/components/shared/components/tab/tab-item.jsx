import {Button} from "../button/button.jsx";

export const TabItem = ({onClick, active, children}) => {
    return (
        <Button onClick={onClick}
                disabled={active}
                className={active ? 'tab--active' : ''}>
            {children}
        </Button>
    )
}
