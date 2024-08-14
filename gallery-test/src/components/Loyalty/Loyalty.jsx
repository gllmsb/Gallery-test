import styles from './Loyalty.module.scss';

import leftImage from '../../assets/left.png';
import rightImage from '../../assets/right.png';

export const Loyalty = () => {
    return (
        <section className={styles.loyaltySection}>
            <div className={styles.imageWrapper}>
                <img src={leftImage} alt="left side" className={styles.image} />
                <div className={styles.overlay}>
                    <h3 className={styles.heading}>One 2 One</h3>
                    <p className={styles.paragraph}>
                        Lorem ipsum dolor sit amet consectetur. Nunc <br/> pellentesque senectus aliquam ipsum. Sed mauris<br/> posuere odio nisl in. Massa vitae faucibus imperdiet<br/> facilisi pulvinar maecenas platea purus pulvinar.<br/> Lacinia imperdiet nisi nunc vel ut convallis a est<br/> scelerisque.
                    </p>
                    <button className={styles.button}>BOOK TID</button>
                </div>
            </div>

            <div className={styles.imageWrapper}>
                <img src={rightImage} alt="right side" className={styles.image} />
                <div className={styles.overlay}>
                    <h3 className={styles.heading}>Loyalty Free</h3>
                    <p className={styles.paragraph}>
                         Lorem ipsum dolor sit amet consectetur. Nunc <br/> pellentesque senectus aliquam ipsum. Sed mauris<br/> posuere odio nisl in. Massa vitae faucibus imperdiet<br/> facilisi pulvinar maecenas platea purus pulvinar.<br/> Lacinia imperdiet nisi nunc vel ut convallis a est<br/> scelerisque.
                    </p>
                    <button className={styles.button}>LÆS MERE</button>
                </div>
            </div>
        </section>
    )
}