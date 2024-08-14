import styles from './Gallery.module.scss';

import img1 from '../../assets/image1.png';
import img2 from '../../assets/image2.png';
import img3 from '../../assets/image3.png';
import img4 from '../../assets/image4.png';
import img5 from '../../assets/image5.png';
import img6 from '../../assets/image6.png';
import img7 from '../../assets/image7.png';
import img8 from '../../assets/image8.png';
import img9 from '../../assets/image9.png';
import img10 from '../../assets/image10.png';
import img11 from '../../assets/image11.png';
import img12 from '../../assets/image12.png';

const images = [
    img1, img2, img3, img4,
    img5, img6, img7, img8, 
    img9, img10, img11, img12
];

export const Gallery = () => {
    return (
        <section className={styles.gallerySection}>
            <h3 className={styles.heading}>FOLLOW US ON INSTAGRAM</h3>
            <div className={styles.gridContainer}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Gallery item ${index + 1}`} className={styles.image} />
                ))}
            </div>
        </section> 
    )
}