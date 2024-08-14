import styles from './Header.module.scss';
import headerImage from '../../assets/header.png';

export const Header = () => {
    return (
      <header
        className={styles.header}
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        <div className={styles.content}>
          <h1 className={styles.title}>UNDER THE MOON</h1>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.subtitle}>HAIRSTYLIST OG FRISØR</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Laoreet in vestibulum id in.<br />
            At aliquam sed nibh elementum. Gravida et tellus quam nibh diam<br /> blandit a odio semper.
            Eu congue eget dolor commodo pellentesque<br /> et ac orci. matAccumsan  rhoncus sed fermentum malesuada.
            Eu risus<br /> integer consequat egestas diam suspendisse consequat tis.
          </p>
        </div>
      </header>
    );
  };