import { useEffect, useRef, useState } from "react";

import { TextContainer } from "./text.styles";

const Text: any = ({ text }: { text: string }) => {
  const index = useRef(0);

  const [currentText, setCurrentText] = useState(text);

  useEffect(() => {
    index.current = 0;
    setCurrentText(text.charAt(index.current));
  }, [text]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentText((value: string) => value + text.charAt(index.current));

      index.current += 1;
    }, 20);
    return () => clearTimeout(timeoutId);
  }, [currentText, text]);

  return <TextContainer>{currentText}</TextContainer>;
};

export default Text;
