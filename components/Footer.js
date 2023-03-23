

export default function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <div className="flex-wrapper">
                    <nav>
                        <ul>
                            <li><a href="#">Афиша и Билеты</a></li>
                            <li><a href="#">Контакты и Сотрудничество</a></li>
                            <li><a href="#">Новости</a></li>
                            <li><a href="#">Политика конфиденциальности</a></li>
                        </ul>
                    </nav>
                    <a href='#' className="logo">
                        <img src="/images/logo.png" alt="Scriptonite Logo" />
                    </a>
                </div>
            </div>
        </footer>
    )
}