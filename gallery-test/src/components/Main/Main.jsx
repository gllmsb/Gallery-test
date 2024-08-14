import styles from './Main.module.scss';
export const Main = () => {
    return (
        <section className={styles.mainSection}>
            <h2 className={styles.mainHeading}>Under the Moon - New Style</h2>
            <p className={styles.mainParagraph}>
            Lorem ipsum dolor sit amet consectetur. Orci elementum ullamcorper feugiat vitae <br/> faucibus. Sodales neque quisque sodales etiam tortor ut praesent. Id luctus tincidun<br/> aenean molestie pellentesque. Viverra sit aliquam faucibus volutpat lectus sed eu<br/> euismod. Suspendisse augue ipsum pellentesque sagittis nunc. Maecenas mattis neque<br/> orci bibendum quam faucibus amet platea congue. Amet condimentum faucibus<br/> ultrices nunc varius nisl viverra vivamus amet. Habitant dictum fermentum vitae<br/> proin ut. Eu faucibus molestie lacus porttitor sed pellentesque turpis in. Aliquam.
            </p>
            <button className={styles.mainButton}>Læs mere</button>
        </section>
    )
}