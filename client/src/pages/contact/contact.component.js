import React from "react";
import { ContactContainer, ContactFormContainer } from "./contact.style";

const Contact = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <ContactContainer>
        <ContactFormContainer>
          <i class="fas fa-phone"></i>
          <p>111-111-111</p>
        </ContactFormContainer>
        <ContactFormContainer>
          <i class="fas fa-map-marker-alt"></i>
          <p>Some Street 64</p>
        </ContactFormContainer>
        <ContactFormContainer>
          <i class="fas fa-envelope"></i>
          <p>crwnshop@support.com</p>
        </ContactFormContainer>
      </ContactContainer>
    </>
  );
};

export default Contact;
