export const TabItem = ({onClick, active, children}) => {
    return (
        <button onClick={onClick}
                disabled={active}
                className={active ? 'tab--active' : ''}>
            {children}
        </button>
    )
}
