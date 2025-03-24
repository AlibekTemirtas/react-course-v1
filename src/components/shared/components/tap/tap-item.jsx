import {Button} from "../button/button.jsx";

export const TapItem = ({onClick, active, children}) => {
    return (
        <Button onClick={onClick}
                disabled={active}
                className={active ? 'tab--active' : ''}>
            {children}
        </Button>
    )
}
