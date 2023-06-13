import React from "react";
import Layout from "../components/Layout";
import SpaWellnessSection from "../components/SpaWellnessSection";
import Services from "../components/Services";
import SpaEtiquetteFAQ from "../components/SpaEtiquetteFAQ";
import ClientReview from "../components/ClientReview";

const Spa = () => {
  return (
    <Layout>
      <SpaWellnessSection />
      <Services />
      <SpaEtiquetteFAQ />
      <ClientReview />
    </Layout>
  );
};

export default Spa;
