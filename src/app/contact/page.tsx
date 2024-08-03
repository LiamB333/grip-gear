import ContactInformation from "@/components/Website/Contact/ContactInfo";
import CustomiseAction from "@/components/Website/CustomiseAction/CustomiseAction";
import FAQs from "@/components/Website/FAQs/FAQs";
import Footer from "@/components/Website/Footer/Footer";
import GetInTouch from "@/components/Website/GetInTouch/GetInTouch";
import NavBar from "@/components/Website/NavBar/NavBar";
import React from "react";

const faqData = [
  {
    question: "How can I contact you?",
    answer:
      "You can contact us by sending an email to our support team, ring us or message us on Instagram.",
  },
  {
    question: "What is your response time?",
    answer: "Our team strives to respond to all enquiries within 24 hours.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package.",
  },
];

const Contact: React.FC = () => {
  return (
    <div>
      <NavBar />
      <ContactInformation />
      <GetInTouch />
      <FAQs
        faqData={faqData}
        paragraphText="Find answers to commonly asked questions about contacting our company or support."
        includeContactForm={false}
      />
      <CustomiseAction
        title="Start Customising Your Grip Socks"
        description="Create unique grip socks with our easy-to-use designer."
        buttonText="Design now"
      />
      <Footer />
    </div>
  );
};

export default Contact;
