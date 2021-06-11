import React from "react";
import { SiMinutemailer, SiLinkedin, SiReact } from "react-icons/si";

import { ContactPageContainer } from "./contact.styles";

const ContactPage = () => (
  <ContactPageContainer>
    <div style={{ fontSize: "1.5rem", marginBottom: "30px" }}>
      Made by{" "}
      <span style={{ fontWeight: "bold", color: "#b446c2" }}>
        Miguel Vilhena
      </span>
      :
    </div>
    <a href="https://www.miguelvilhena.com/" target="_blank" rel="noreferrer">
      <SiReact /> Portfolio
    </a>
    <a
      href="https://www.linkedin.com/in/miguel-vilhena-215aa590/"
      target="_blank"
      rel="noreferrer"
    >
      <SiLinkedin /> Linkedin
    </a>
    <a href="mailto: mvmories@gmail.com" target="_blank" rel="noreferrer">
      <SiMinutemailer /> Email
    </a>
  </ContactPageContainer>
);

export default ContactPage;
