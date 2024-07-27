import ContactInformation from "@/components/Website/Contact/ContactInfo";
import Footer4 from "@/components/Website/Footer/Footer";
import NavBar from "@/components/Website/NavBar/NavBar";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div>
      <NavBar />
      <ContactInformation />
      <Footer4 />
    </div>
  );
};

export default Contact;
