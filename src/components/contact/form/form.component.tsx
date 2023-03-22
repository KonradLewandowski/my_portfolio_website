import Spinner from "../../spinner/spinner.component";

import { AiOutlineCheck } from "react-icons/ai";
import { BiError } from "react-icons/bi";

import { FormContainer, InputContainer, TextAreaContainer } from "./form.styles";
import { ButtonPrimary } from "../../button/button.styles";

type FormProps = {
  form: React.RefObject<HTMLFormElement>;
  sendEmail: (e: React.MouseEvent<HTMLFormElement>) => Promise<void>;
  isSent: boolean;
  isMessage: boolean;
  isError: boolean;
};

const Form: React.FC<FormProps> = ({ form, sendEmail, isSent, isMessage, isError }) => {

  return (
    <FormContainer ref={form} onSubmit={sendEmail} autoComplete="off">
      {isSent ? null : <Spinner />}
      {isMessage ? (
        <div className="ok">
          Message sent! Thank you! <AiOutlineCheck />
        </div>
      ) : null}
      {isError ? (
        <div className="error">
          Something went wrong! <BiError />
        </div>
      ) : null}
      <InputContainer type="text" name="name" placeholder="Your Name" required />
      <InputContainer type="email" name="email" placeholder="Your Email" required />
      <TextAreaContainer
        name="message"
        id=""
        cols={10}
        rows={7}
        placeholder="Your Message"
        required
      />
      <ButtonPrimary type="submit" submit>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>Send Message</a>
      </ButtonPrimary>
    </FormContainer>
  );
};

export default Form;
