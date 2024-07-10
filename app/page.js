import HomeSlider from "@/components/slider/HomeSlider";
import Image from 'next/image';
import Link from 'next/link';
import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
      <h1>Waterscapesng</h1>
      <h2>SWIMMING POOL PRODUCTS </h2>
      <p>...We build custom designs swimming pools</p> 

      </div>
      {/* Slider */}
      <HomeSlider />

      {/* About */}

      <div class="container mt-5">
        <div class="row p-2">
          <div class="col-md-6 text-center mb-2">
          <p>Waterscapes Nigerian Company is one of the biggest Swimming Pool Construction Company in Nigeria.</p>
        <p>For over 25 years we have evolved Nigeria’s most experienced dealer in pool making and maintenance industry where we install world class swimming pools, water fountains and water treatment plants throughout the country.</p>
        <p>Extensive market research, experience combined with the industry’s most experienced pool designers has enabled Waterscapes to develop Nigeria’s most architecturally modern and innovative range of pools available at competitive prices that will suit any family and budget. holding close to us a long and great customer service record.</p>
        <button type="button" class="btn btn-outline-primary">More About Us</button>

          </div>
          <div class="col-md-6 ">
            <div className={styles.imageContainer}>
                <Image src="/assets/images/joe.jpg" className="col-md-6 float-md-end mb-3 ms-md-3 " alt="..." 
                  //width={400} height={200}
                  layout="fill"
                  objectFit="cover"
                  
              />

            </div>
         
          </div>
        </div>
      
      </div>

      {/* Services */}

      <div className={styles.services}>
        <h3>Services</h3>
          <div class="row align-items-end">
            <div class="col">
              One of three columns
            </div>
            <div class="col">
              One of three columns
            </div>
            <div class="col">
              One of three columns
            </div>
          </div>
     </div>
     

     
    </div>
  );
}
