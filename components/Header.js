
export default function Header() {

    return (
        <header className="main-header">
            <div className="main-wrapper">
                <div className="flex-wrapper">
                    <div></div>

                    <div className="logo">
                        <img src="/images/logo.png" alt="Scriptonite Logo" />
                    </div>

                    <nav className="links">
                        <ul>
                            <li><a href="#">Афиша и Билеты</a></li>
                            <li className="with_logo"><a href="#">О <img src="/images/logo.png" alt="Scriptonite Logo" /></a></li>
                            <li><a href="#">Новости</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}