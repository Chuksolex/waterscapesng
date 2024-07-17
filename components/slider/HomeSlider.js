// components/SimpleSlider.js
'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss';
import { arrow } from '@popperjs/core';

// Dynamically import react-slick with SSR disabled
const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function SimpleSlider() {
  const router = useRouter();

  const goToContact = () => {
    router.push('/contact');
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    adaptiveHeight: true,
    adaptiveWidth: true,
    dots: true,
  };

  return (
    <Slider {...settings}>
      <div className="image-slider">
        <h2 className="header">Beautiful Designs</h2>
        <Image src="/assets/images/frontimage1.png" alt="swimming pool pic" width={500} height={300} />
        <button className="quotebutton" onClick={goToContact}>Contact Us</button>
      </div>
      <div className="image-slider">
        <h2 className="header">Water Fountains</h2>
        <Image src="/assets/images/frontimage10.png" alt="swimming pool pic" width={500} height={300} />
        <button className="quotebutton" onClick={goToContact}>Contact Us</button>
      </div>
      <div className="image-slider">
        <h2 className="header">Custom Swimming Pools</h2>
        <Image src="/assets/images/pool1.jpg" alt="swimming pool pic" width={500} height={300} />
        <button className="quotebutton" onClick={goToContact}>Contact Us</button>
      </div>
      <div className="image-slider">
        <h2 className="header">Custom Designs Swimming Pools</h2>
        <Image src="/assets/images/frontimage2.png" alt="swimming pool pic" width={500} height={300} />
        <button className="quotebutton" onClick={goToContact}>Contact Us</button>
      </div>
      <div className="image-slider">
        <h2 className="header">Pool Products</h2>
        <Image src="/assets/images/pool2.jpg" alt="pool picture" width={500} height={300} />
        <button className="quotebutton" onClick={goToContact}>Contact Us</button>
      </div>
      <div className="image-slider">
        <h2 className="header">Pool Chairs</h2>
        <Image src="/assets/images/pool3.jpg" alt="fine pool" width={500} height={300} />
        <button className="quotebutton" onClick={goToContact}>Contact Us</button>
      </div>
      <div className="image-slider">
        <h2 className="header">Swimming Pool Construction & Design</h2>
        <Image src="/assets/images/workinprogress1.jpg" alt="working at pool" width={500} height={300} />
        <button className="quotebutton" onClick={goToContact}>Contact Us</button>
      </div>
      <div className="image-slider">
        <h2 className="header">Swimming Treatment & Chemicals</h2>
        <Image src="/assets/images/chlorine1.jpg" alt="pool chemical" width={500} height={300} />
        <button className="quotebutton" onClick={goToContact}>Contact Us</button>
      </div>
      <div className="image-slider">
        <h2 className="header">Swimming Pool With Underwater Massage</h2>
        <Image src="/assets/images/frontimage7.png" alt="pool chemical" width={500} height={300} />
        <button className="quotebutton" onClick={goToContact}>Contact Us</button>
      </div>
    </Slider>
  );
}
