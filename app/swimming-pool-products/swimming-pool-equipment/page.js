"use client";

import styles from "./PoolEquipment.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {equipmentData} from "@/components/data/Data";

const PoolEquipment = () => {
  const router = useRouter();

  const gotoContact = () => {
    router.push('/contact');
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Swimming Pool Products</h1>
      </div>

      <p className={styles.p}>
        We do not just design and construct pools, we are the major dealer on all types of pool products and equipment in Nigeria.
      </p>

      <p className={styles.p}>
        We are firmly committed to providing only the highest quality of pool products for your homes and leisure businesses. 
      </p>

      <h2>Category of Available Pool Products:</h2>
      <p>
        The following product categories are in stock for nationwide delivery to our esteemed customers.
      </p>
      

      <div className={styles.rowContainer}>
        {equipmentData.map((product) => (
          <div key={product.id} className={styles.productContainer}>
           
              
                <div className={styles.imageContainer}>
                  <Image
                    src={product.img}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="card-img-top"
                  />
                </div>
                <div className={styles.textContainer}>
                  <h3 className="">{product.name}</h3>
                  <p>{product.desc} </p>
                </div>
              
        
          </div>
        ))}
      </div>

      <button className="btn btn-outline-primary mt-4" onClick={gotoContact}>
        Contact For Prices
      </button>
    </div>
  );
};

export default PoolEquipment;
