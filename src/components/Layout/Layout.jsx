export const Layout = ({children}) => {
    return (
        <div>
            <header>Header</header>
            <section>{children}</section>
            <footer>Footer</footer>
        </div>
    )
}
