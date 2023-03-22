import { OptionsContainer } from "./options.styles";

import { MainButton } from "../../button/button.styles";

import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger, BsWhatsapp, BsTelephone } from "react-icons/bs";

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
          <div className={'option__inner-box'}>
              <h3>Email</h3>
              <p>{email}</p>
              <a href={`mailto:${email}?subject=Let's Talk!`} target="_blank" rel="noreferrer">
                  <MainButton>
                      Send a message
                  </MainButton>
              </a>
          </div>
      </article>

      <article key={1} className="option">
        <BsMessenger className="icon" />
          <div className={'option__inner-box'}>
              <h3>Messenger</h3>
              <p>{me}</p>
              <a href={`https://m.me/${messenger}`} target="_blank" rel="noreferrer">
                  <MainButton>
                      Send a message
                  </ MainButton>
              </a>
          </div>
      </article>

      <article key={2} className="option">
        <BsWhatsapp className="icon" />
          <div className={'option__inner-box'}>
              <h3>WhatsApp</h3>
              <p>Contact via app</p>
              <a href={`https://api.whatsapp.com/send?phone=${phone}`} target="_blank" rel="noreferrer">
                  <MainButton>
                      Send a message
                  </MainButton>
              </a>
          </div>
      </article>

      <article key={3} className="option hide-desktop">
        <BsTelephone className="icon" />
          <div className={'option__inner-box'}>
              <h3>Phone</h3>
              <p>+48 666 960 130</p>
              <a href={`tel${phone}`} target="_blank" rel="noreferrer">
                  <MainButton>
                      Make a call
                  </MainButton>
              </a>
          </div>
      </article>
    </OptionsContainer>
  );
};
export default Options;
