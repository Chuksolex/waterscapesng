"use client";

import styles from "./SwimmingPoolProducts.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import productCat from "@/components/data/Data";

const SwimmingPoolProducts = () => {
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
      
      <div className="row p-4">
        {productCat.map((product) => (
          <div key={product.id} className="col-12 col-md-4 col-lg-4 mb-4">
            <Link href={`/swimming-pool-products/${product.id}`} className={styles.cardLink}>
              <div className="card h-100">
                <div className={styles.imageContainer}>
                  <Image
                    src={product.img}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">{product.name}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <button className="btn btn-outline-primary mt-4" onClick={gotoContact}>
        Contact For Prices
      </button>
    </div>
  );
};

export default SwimmingPoolProducts;
