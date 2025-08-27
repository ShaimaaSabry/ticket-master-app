import {Link} from "react-router-dom";
import styles from "./NavigationMenu.module.css";

export default function NavigationMenu() {
    return(
        <nav className={styles.navMenu}>
            <div className={styles.logo}>
                <img src="https://cdn.cookielaw.org/logos/ba6f9c5b-dda5-43bd-bac4-4e06afccd928/002b248b-6e0e-44fd-8cb6-320ffefa48fe/e5b998c1-73c7-46e8-a7ff-aa2ea18369bf/Ticketmaster-Logo-Azure_without_R.png" alt="Ticketmaster Logo" style={{ width: 340 }} />
            </div>
            <div className={styles.links}>
                <Link to={"/"}>Home</Link>
            </div>
        </nav>
    )
}