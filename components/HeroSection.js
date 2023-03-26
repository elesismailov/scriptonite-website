import Header from '@/components/Header';

export default function HeroSection() {

    return (
        <section className="hero">
            
            <Header />

            <div className="wrapper">

                <div className="preview">
                    <img src="/images/scriptonite-1.png" alt="Scriptonite with a mic looking down, and about to sing." />
                </div>

                <div className="cta-block">
                    <div className="cta-block_wrapper">
                        <div className="flex-wrapper">
                            <div className="text-block">
                                <h1>GRAND TOUR</h1>
                                <a href='#'>Алма-Ата</a>
                                <a href='#'>Бишкек</a>
                                <a href='#'>Москва</a>
                                <a href='#'>Ташкент</a>
                                <a href='#'>Санкт-Петербург</a>
                            </div>
                            <div className="preview">
                                <img src="/images/preview-1.png" alt="Scriptonite at a concert." />
                            </div>
                        </div>
                        <a href='#' className="cta">ПОСМОТРЕТЬ БИЛЕТЫ</a>
                    </div>
                </div>

            </div>
        </section>
    )
}