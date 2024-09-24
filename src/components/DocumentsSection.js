import React from "react";
import DocumentCard from "./DocumentCard";
import styles from "./DocumentsSection.module.css";
import ECommerce from "../assets/images/E-Commerce.jpeg";

const DocumentsSection = () => {
  return (
    <div className={styles.documentsContainer}>
      <DocumentCard
        header="Aadhar Card (PDF)"
        src={ECommerce}
        link="path/to/aadhar-pdf.pdf"
        linkText="View Aadhar Image"
        altText="Aadhar Card"
      />

      <DocumentCard
        header="PAN Card (jpg/jpeg)"
        src={ECommerce}
        link="path/to/pan-image.jpg"
        linkText="View PAN Card Image"
        altText="PAN Card"
      />

      <DocumentCard
        header="Business Licence (jpg/jpeg)"
        src={ECommerce}
        link="path/to/business-licence.jpg"
        linkText="View Business Licence Image"
        altText="Business Licence"
      />

      <DocumentCard
        header="Passport Size Photo (jpg/jpeg)"
        src={ECommerce}
        link="path/to/passport-photo.jpg"
        linkText="View Self Image"
        altText="Passport Size Photo"
      />

      <DocumentCard
        header="Product Image"
        src={ECommerce}
        link="path/to/product-image.jpg"
        linkText="View Product Image"
        altText="Product Image"
      />
    </div>
  );
};

export default DocumentsSection;
