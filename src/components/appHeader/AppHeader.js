import './appHeader.scss';

const AppHeader = () => {
    return (
        <header>
            <nav className="header">
                <h2 className="header__title">
                    <a href='/'>Beer App</a>
                </h2>
            </nav>
        </header>
    )
}

export default AppHeader;