import logo from "../assets/schoes.svg"
import styles from "./HomeNavigation.module.scss"

const HomeNavigation = () => {
    return (
        <>
        <div>
            <img src={logo} alt="schoes" />
            <div className={styles.searchBalk}>
                <form className={styles.nav_form}>
                    <label className={styles.label} htmlFor="query"></label>
                    <input
                        className={styles.search_nav}
                        type="text"
                        name="query"
                        placeholder="Search"
                    />
                </form>
            </div>
        </div>
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