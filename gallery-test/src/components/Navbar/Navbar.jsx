import styles from './Navbar.module.scss';
export const Navbar = () => {
    return(
    <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
            <li><a href="#hjem">HJEM</a></li>
            <li><a href="#koncepter">KONCEPTER</a></li>
            <li><a href="#hutm-loyalty">UTM LOYALTY</a></li>
            <li><a href="#om">OM</a></li>
            <li><a href="#kontakt">KONTAKT</a></li>
        </ul>
    </nav>
    ); 
};