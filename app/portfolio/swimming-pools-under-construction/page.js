import React from 'react';
import styles from './SwimmingPoolConstruction.module.css';
import Link from 'next/link';


const SwimmingPoolsUnderConstruction = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Swimming Pools Under Construction</h1>
            <div className={styles.videoContainer}>
                <div className={styles.videoItem}>
                    <h2>Waterscapesng Carrying Out Maintenace Work</h2>
                    <video controls>
                        <source src="/assets/videos/video1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={styles.videoItem}>
                    <h2>Newly Built Water Fountain At Primary Health Center Odot Nsit Atai Akwa Ibom State By WaterscapensNg</h2>
                    <video controls>
                        <source src="/assets/videos/video2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={styles.videoItem}>
                    <h2>WaterscapesNg Men At Work In Pool In Eket</h2>
                    <video controls>
                        <source src="/assets/videos/video3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={styles.videoItem}>
                    <h2>Swimming Pool Construction By Men of WaterscapesNg At Uyo.</h2>
                    <video controls>
                        <source src="/assets/videos/video4.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className='bg-primary text-white p-4'>
                <p>We have numerous portfolio projects and custom designs to add here</p>
                <h5>To get custom design for your home, hotel, or organization contact us:</h5>
                <Link href={"/contact"} className='btn btn-success m-4'>Get My Custom Design</Link>
                <Link href={"/portfolio/our-brochure"} className='btn btn-success m-4'>See Brochure For More Designs</Link>


            </div>
        </div>
    );
};

export default SwimmingPoolsUnderConstruction;
