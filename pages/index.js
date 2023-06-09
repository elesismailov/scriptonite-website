import Head from 'next/head'

import EmailForm from '@/components/EmailForm';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionAlbums from '@/components/SectionAlbums';


export default function Home() {
  return (
    <>
      <Head>
        <title>Scriptonite</title>
        <meta name="description" content="Scriptonite is a famous russian-kazakh rapper/singer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="html-wrapper">
        <header></header>
        <main>

          <HeroSection />

          <section className="sub-hero">
            <div className="flex-wrapper">
              <div className="text-block">
                <p>Innovation.</p>
                <p>Talent.</p>
                <p>Style.</p>
              </div>
              <div className="preview-block">
                <img src="/images/preview-2.png" width='627' height='274' alt="Скриптонит на концерте держит микрофон." />
              </div>
            </div>
          </section>

          <section className="about">
            <h1>О <img src="/images/logo.png" alt="Skriptonit logo." /></h1>
            <p className='text'>
              Начал заниматься музыкой в подростковом возрасте, в 11 лет увлёкся рэпом, в 15 лет начал сочинять музыку. Потом были первые группы и творческие объединения в Павлодаре, Алма-Ате. В 2009 году с другом Ануаром, с которым до сих пор вместе выступает, создали группу Jillz, благодаря которой стали узнавать по всем городам Казахстана.
              Впервые громко заявил о себе в 2013 году видеоклипом на песню «VBVVCTND»,спустя полтора года выпустил свой дебютный альбом «Дом с нормальными явлениями», который стал одним из самых удачных русскоязычных рэп-альбомов 2015 года.
              Видеоклипы на песни «Лёд» и «Миллионер из трущоб» с участием Скриптонита набрали миллионы просмотров на YouTube.
              На данный момент у Адиля уже 5 студийных альбомов.
            </p>
            <div className="more">
              <a href="#" className=''>подробнее...</a>
            </div>
            <div className="avatar">
              <img src="/images/avatar.jpg" alt="Skriptonit profile picture." />
            </div>
            <nav className="social">
              <ul>
                <li><a href="#">
                  <svg width="51" height="52" viewBox="0 0 496 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M248 8C111.1 8 0 119.1 0 256C0 392.9 111.1 504 248 504C384.9 504 496 392.9 496 256C496 119.1 384.9 8 248 8ZM348.7 372.9C344.5 372.9 341.9 371.6 338 369.3C275.6 331.7 203 330.1 131.3 344.8C127.4 345.8 122.3 347.4 119.4 347.4C109.7 347.4 103.6 339.7 103.6 331.6C103.6 321.3 109.7 316.4 117.2 314.8C199.1 296.7 282.8 298.3 354.2 341C360.3 344.9 363.9 348.4 363.9 357.5C363.9 366.6 356.8 372.9 348.7 372.9ZM375.6 307.3C370.4 307.3 366.9 305 363.3 303.1C300.8 266.1 207.6 251.2 124.7 273.7C119.9 275 117.3 276.3 112.8 276.3C102.1 276.3 93.4 267.6 93.4 256.9C93.4 246.2 98.6 239.1 108.9 236.2C136.7 228.4 165.1 222.6 206.7 222.6C271.6 222.6 334.3 238.7 383.7 268.1C391.8 272.9 395 279.1 395 287.8C394.9 298.6 386.5 307.3 375.6 307.3ZM406.6 231.1C401.4 231.1 398.2 229.8 393.7 227.2C322.5 184.7 195.2 174.5 112.8 197.5C109.2 198.5 104.7 200.1 99.9 200.1C86.7 200.1 76.6 189.8 76.6 176.5C76.6 162.9 85 155.2 94 152.6C129.2 142.3 168.6 137.4 211.5 137.4C284.5 137.4 361 152.6 416.9 185.2C424.7 189.7 429.8 195.9 429.8 207.8C429.8 221.4 418.8 231.1 406.6 231.1Z" fill="var(--neon-blue)"/>
                  </svg>
                </a></li>
                <li><a href="#">
                  <svg width="52" height="52" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M511.8 130.7C511.8 115 510.5 99.3 506.7 84C500 56 484 34.7 460.2 19C448 11 434.5 6.1 420.1 3.5C409.1 1.5 397.9 0.6 386.8 0.3L384.1 0H127.6C124.4 0.3 121.1 0.4 117.9 0.6C102 1.5 86.1999 3.2 71.0999 9.2C42.6999 20.4 22.0999 40.1 10.0999 68.4C5.8999 78 3.7999 88.2 2.2999 98.5C1.0999 106.8 0.399902 115.3 0.0999023 123.7L-0.100098 125.7V386.4C0.0999023 389.4 0.199902 392.4 0.399902 395.4C1.4999 412.8 3.6999 430.1 11.0999 446.1C24.8999 476.4 48.1999 496.3 80.0999 505.8C88.9999 508.6 98.2999 509.8 107.7 510.6C119.5 511.8 131.4 511.9 143.2 511.9H378.5C389.7 511.9 400.8 511.2 412 509.7C429.6 507.5 446.1 502.3 461 492.5C478.9 480.7 492.4 465 501.1 445.4C505.1 436.4 507.3 426.8 509 417.2C511.4 402.8 511.9 388.2 511.9 373.6C511.8 292.6 511.9 211.6 511.8 130.6V130.7ZM374.8 215.8V337.6C374.8 346.5 373.6 355.3 369.6 363.3C363.4 375.9 353.4 383.8 340 387.6C332.6 389.8 324.9 390.9 317.2 391.3C297 392.3 279.4 378.6 275.8 358.6C272.7 342.1 280.6 323.9 298 315.4C304.8 312.1 312.2 310.1 319.7 308.6C327.8 306.9 335.9 305.3 343.9 303.4C349.8 302.1 353.6 298.5 354.8 292.4L355.2 288.3C355.2 249.6 355.2 210.8 355.2 172.1L354.6 168.2C353.8 165 351.4 163 348.1 163.2C344.7 163.4 341.4 163.9 338 164.6C321.7 167.8 305.5 171 289.3 174.3L210.4 190.2L209.3 190.5C203.4 192.2 201.3 194.8 201 201V203.7C200.9 259.2 201 314.7 200.9 370.2C200.9 379.2 199.9 388 196.3 396.4C190.4 410.1 179.9 418.7 165.7 422.7C158.2 424.9 150.5 426.1 142.7 426.4C122.3 427.2 105.3 413.6 101.8 393.5C98.7999 376.2 106.7 357.5 126.4 349.2C134.1 346 142 344.3 150.1 342.6C156.2 341.4 162.4 340.1 168.4 338.9C176.6 337.2 180.8 332 181.2 323.7V320.5C181.2 257.3 181.2 194.2 181.2 131C181.2 128.3 181.5 125.7 182.1 123.1C183.6 117 187.9 113.5 193.8 112.1C199.2 110.7 204.8 109.7 210.3 108.5C226 105.3 241.5 102.2 257.2 99.1L305.6 89.3C319.9 86.5 334.2 83.6 348.5 80.7C353.2 79.8 357.9 78.8 362.7 78.4C369.3 77.8 373.9 82 374.5 88.7C374.7 90.3 374.8 91.9 374.8 93.4C374.8 134.2 374.8 174.9 374.8 215.8Z" fill="var(--neon-blue)"/>
                  </svg>
                </a></li>
              </ul>
            </nav>
          </section>

          <SectionAlbums />

          <EmailForm />

          <Footer />

        </main>
      </div>
    </>
  )
}
