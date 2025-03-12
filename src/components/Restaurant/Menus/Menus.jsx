export const Menus = ({menus}) => {
    return (
        <div className="group">
            <h3 className="group-name">
                Меню
            </h3>
            <ul className="group-list">
                {menus.map(({name}) => (<li key={name}>{name}</li>))}
            </ul>
        </div>
    )
}
