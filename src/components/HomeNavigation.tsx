import logo from "../assets/schoes.svg"
import styles from "./HomeNavigation.module.scss"

const HomeNavigation = () => {
    return (
        <>
        <img src={logo} alt="schoes" />
        <nav>
            <ul className={styles.friendly_nav}>
                <li><a href="/new">New</a></li>
                <li><a href="/Brands">Brands</a></li>
                <li><a href="/Brands">Women</a></li>
                <li><a href="/Brands">Men</a></li>
                <li><a href="/Brands">Girls</a></li>
                <li><a href="/Brands">Boys</a></li>
                <li><a href="/Brands">Kids</a></li>
            </ul>
        </nav>
        </>
    );
}

export default HomeNavigation;