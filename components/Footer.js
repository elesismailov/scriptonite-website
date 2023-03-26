

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
                <div className="attribution">
                    <p className="sa"><a href="https://www.instagram.com/severussanjik/" >Designed by <span>Sanzhar</span></a></p>
                    {/* <p className="el"><a href="http://elesismailov.com" >Coded by <img width='100' src="/images/eles_ismailov_logo.png" alt="Text Eles Ismailov using Impact Font." /></a></p> */}
                    <p className="el"><a href="http://elesismailov.com" >Coded by <span>Eles</span></a></p>
                </div>
            </div>
        </footer>
    )
}