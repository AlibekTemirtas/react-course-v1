export const TabItem = ({onClick, active, children}) => {
    return (
        <button onClick={onClick}
                className={active ? 'tab--active' : ''}>
            {children}
        </button>
    )
}
