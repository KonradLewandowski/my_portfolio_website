import { useRef, useState } from "react";
import emailjs from "emailjs-com";

import Form from "./form/form.component";
import Options from "./options/options.component";

import { ContactContainer } from "./contact.styles";
import { Section } from "../section/section.styles";

const { me, email, messenger, phone } = {
  me: "Konrad Lewandowski",
  email: "konrad.lewandowski92@gmail.com",
  messenger: "kd.li.948",
  phone: "48666960130",
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [isSent, setIsSent] = useState<boolean>(true);
  const [isMessage, setIsMessage] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const sendEmail = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSent(false);
      const { status } = await emailjs.sendForm(
        "service_yuv6bgp",
        "template_giw610e",
        form.current!,
        "9DRt657c13PDRkhNT"
      );

      if (status === 200) {
        setIsSent(true);
        setIsMessage(true);
        setTimeout(() => setIsMessage(false), 2000);
      }
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setTimeout(() => {
        setIsSent(true);
        setIsError(true);
        setTimeout(() => setIsError(false), 3000);
      }, 2000);
    }
  };

  return (
    <Section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <ContactContainer>
        <Options {...{ me, email, messenger, phone }} />
        <Form {...{ form, sendEmail, isSent, isMessage, isError }} />
      </ContactContainer>
    </Section>
  );
};

export default Contact;
