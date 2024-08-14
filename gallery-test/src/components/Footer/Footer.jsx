import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.leftSide}>
                <h3 className={styles.heading}>Subscribe to Newsletter</h3>
                <form className={styles.form}>
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        className={styles.input} 
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className={styles.input} 
                    />
                    <button type="submit" className={styles.button}>Sign Up</button>
                </form>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.quickLinks}>
                    <h3 className={styles.heading}>Quick Links</h3>
                    <ul className={styles.linksList}>
                        <li><a href="#">Hjem</a></li>
                        <li><a href="#">Om os</a></li>
                        <li><a href="#">Prisliste</a></li>
                        <li><a href="#">Booking</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">Kontakt</a></li>
                    </ul>
                    <h3 className={styles.heading}>Follow Us</h3>
                    <div className={styles.socialMedia}>
                        <a href="#" className={styles.socialIcon}>●</a>
                        <a href="#" className={styles.socialIcon}>●</a>
                        <a href="#" className={styles.socialIcon}>●</a>
                    </div>
                </div>
                <div className={styles.contactInfo}>
                    <h3 className={styles.heading}>Find Us</h3>
                    <p><strong>WhatsApp:</strong> +45 23 43 43 43</p>
                    <p><strong>Telefonnummer:</strong> +45 58 84 84 84</p>
                    <p><strong>Adresse:</strong> Supergatan 56, Oslo, Norway</p>
                </div>
            </div>
        </footer>
    );
};