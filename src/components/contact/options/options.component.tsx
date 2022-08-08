import { OptionsContainer } from "./options.styles";

import { MainButton } from "../../button/button.styles";

import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";

type OptionsProps = {
  email: string;
  me: string;
  messenger: string;
  phone: string;
};

const Options: React.FC<OptionsProps> = ({ email, me, messenger, phone }) => {
  return (
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
  );
};
export default Options;
