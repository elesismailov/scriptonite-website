import SpotifyIcon from "@/components/SpotifyIcon";
import DeezerIcon from "@/components/DeezerIcon";
import AppleMusicIcon from "@/components/AppleMusicIcon";

export default function SectionAlbums() {

    return (
        <section className="albums">
            <h2>Альбомы доступны на всех площадках</h2>
            <ul>
                <li onMouseOver={handleOver} onMouseOut={handleOut}>
                    <ul className="links">
                        <li><a href=""><SpotifyIcon /></a></li>
                        <li><a href=""><AppleMusicIcon /></a></li>
                        <li><a href=""><DeezerIcon /></a></li>
                        <li><a href=""><SpotifyIcon /></a></li>
                    </ul>
                    <img src="/images/album-1.png" width='250' height='250' alt="Album Preview." /></li>
                <li onMouseOver={handleOver} onMouseOut={handleOut}>
                    <ul className="links">
                        <li><a href=""><SpotifyIcon /></a></li>
                        <li><a href=""><AppleMusicIcon /></a></li>
                        <li><a href=""><DeezerIcon /></a></li>
                        <li><a href=""><SpotifyIcon /></a></li>
                    </ul>
                    <img src="/images/album-2.png" width='250' height='250' alt="Album Preview." /></li>
                <li onMouseOver={handleOver} onMouseOut={handleOut}>
                    <ul className="links">
                        <li><a href=""><SpotifyIcon /></a></li>
                        <li><a href=""><AppleMusicIcon /></a></li>
                        <li><a href=""><DeezerIcon /></a></li>
                        <li><a href=""><SpotifyIcon /></a></li>
                    </ul>
                    <img src="/images/album-3.png" width='250' height='250' alt="Album Preview." /></li>
                <li onMouseOver={handleOver} onMouseOut={handleOut}>
                    <ul className="links">
                        <li><a href=""><SpotifyIcon /></a></li>
                        <li><a href=""><AppleMusicIcon /></a></li>
                        <li><a href=""><DeezerIcon /></a></li>
                        <li><a href=""><SpotifyIcon /></a></li>
                    </ul>
                    <img src="/images/album-4.png" width='250' height='250' alt="Album Preview." /></li>
                <li onMouseOver={handleOver} onMouseOut={handleOut}>
                    <ul className="links">
                        <li><a href=""><SpotifyIcon /></a></li>
                        <li><a href=""><AppleMusicIcon /></a></li>
                        <li><a href=""><DeezerIcon /></a></li>
                        <li><a href=""><SpotifyIcon /></a></li>
                    </ul>
                    <img src="/images/album-5.png" width='250' height='250' alt="Album Preview." /></li>
                <li onMouseOver={handleOver} onMouseOut={handleOut}>
                    <ul className="links">
                        <li><a href=""><SpotifyIcon /></a></li>
                        <li><a href=""><AppleMusicIcon /></a></li>
                        <li><a href=""><DeezerIcon /></a></li>
                        <li><a href=""><SpotifyIcon /></a></li>
                    </ul>
                    <img src="/images/album-6.png" width='250' height='250' alt="Album Preview." /></li>
            </ul>
        </section>
    )
}

function handleOver(event) {
    console.log('hovered')
    console.log(event.target)
    const album = event.target.parentElement;
    album.classList.toggle('hovered')
}

function handleOut(event) {
    console.log('left')
    const album = event.target.parentElement;
    album.classList.toggle('hovered')
}