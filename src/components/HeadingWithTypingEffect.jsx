import React, { useState, useEffect } from "react";

const HeadingWithTypingEffect = ({ text, className }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setTypedText((prev) => prev + text.charAt(index));
        index += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, [text]);

  return <h1
  style={{
    fontFamily: 'Futura Now Headline',
  }}
  className={className}>{typedText}</h1>;
};

export default HeadingWithTypingEffect;
