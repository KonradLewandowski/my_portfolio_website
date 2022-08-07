import { useRef, useState } from "react";
import emailjs from "emailjs-com";

import Form from "./form/form.component";

import { ContactContainer, OptionsContainer } from "./contact.styles";
import { Section } from "../section/section.styles";
import { MainButton } from "../button/button.styles";

import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";

const { me, email, phone, messenger } = {
  me: "Konrad Lewandowski",
  email: "konrad.lewandowski92@gmail.com",
  phone: "0048666960130",
  messenger: "kd.li.948",
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
        <OptionsContainer>
          <article key={0} className="option">
            <AiOutlineMail className="icon" />
            <h4>Email</h4>
            <h5>{email}</h5>
            <MainButton>
              <a
                href={`mailto:${email}?subject=Let's Talk!`}
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </MainButton>
          </article>
          <article key={1} className="option">
            <BsMessenger className="icon" />
            <h4>Messenger</h4>
            <h5>{me}</h5>
            <MainButton>
              <a href={`https://m.me/${messenger}`} target="_blank" rel="noreferrer">
                Send a message
              </a>
            </MainButton>
          </article>
          <article key={2} className="option">
            <BsWhatsapp className="icon" />
            <h4>WhatsApp</h4>
            <h5>Contact via app</h5>
            <MainButton>
              <a
                href={`https://api.whatsapp.com/send?phone=${phone}`}
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </MainButton>
          </article>
        </OptionsContainer>
        <Form {...{ form, sendEmail, isSent, isMessage, isError }} />
      </ContactContainer>
    </Section>
  );
};

export default Contact;
