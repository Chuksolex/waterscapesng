"use client";
import PdfPagination from "@/components/pdfPagination/PdfPagination";

//import styles from "./about.module.css";


const OurBrochure = () => {
  

  return (
    <div className="p-4">
      <h1 className="text-center">Compiled Portfolio of Our Designs and Products.</h1>

      <p className="text-center">
        Our work speak for itself with identifyable proves that you can verify. View or Download our detailed brochure to see history and catalogue of projects, and products
        done and sold by us.
      </p>

      <PdfPagination />
      
    </div>
  );
};

export default OurBrochure;
