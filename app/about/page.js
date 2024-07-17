"use client";

import styles from "./about.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  const gotoBrochure = () => {
    router.push('/portfolio/our-brochure');
  };

  return (
    <div className={styles.about}>
      <div>
      <h1>About Us</h1>
      </div>
    

      <p className={styles.p}>
        With over 25 years of experience, we have been collaborating with
        numerous clients and prominent partners in the Swimming Pool and Water
        Features Industry to design and engineer a wide range of water display
        Fountains, Sculptural and Architectural types including all kinds of
        swimming pools for leisure, therapy, sport, recreation, and religious
        activities, etc.
      </p>

      <p className={styles.p}>
        We are firmly committed to providing only the highest quality finished
        products for your homes and leisure businesses. Sometimes, the sight of
        flowing swimming pool water or the sound of it soothes and brings
        pleasure to your homes, and the soft splash of a fountain brings life
        and motion to your yard, attracting more birds than still water. We can
        always build you a swimming pool within your budget.
      </p>

      <h2>Company Information:</h2>
      <p>
        Waterscapes Nigerian Limited is a registered engineering company under
        the CAC with the registration number:
      </p>
      <p>
        For over 21 years, the company has excelled in delivering pool solutions
        to different organizations and homes under the able leadership of the
        Director, Engr. Joe Edet Akpan.
      </p>

      <div className={styles.imageContainer}>
        <Image
          src="/assets/images/aboutimage2.png"
          alt="Engr. Joe Edet"
          fill
          
        />
      </div>

      <h3>Corporate Offices:</h3>
      <p>
        <strong>Lagos Office:</strong> 32 SAMUEL STREET, AKOWUNJO, LAGOS STATE.
      </p>
      <p>
        <strong>Uyo Office:</strong> 355 ORON RD, UYO, AKWA IBOM STATE.
      </p>
      <button className="btn btn-outline-primary" onClick={gotoBrochure}>
        Download Our Portfolio Brochure
      </button>
    </div>
  );
};

export default About;
