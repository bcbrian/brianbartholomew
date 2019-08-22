import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import Prism from "prismjs";
import "./code.css";

const fonts = [
  // "Fira Code", // ligatures make it not a great learning font
  // "Source Code Pro", //3rd
  // "Nanum Gothic Coding", //I really like this but the ligatures for the === kind of make it hard for learning
  // "Fira Mono", //2nd
  // "IBM Plex Mono", // meh
  "Anonymous Pro" // 1st
];
const getCodeStyle = font => ({
  fontFamily: `${font}, monospace`,
  fontSize: "32px",
  position: "fixed",
  top: "33%",
  left: "0",
  right: "0",
  transform: "translate(0, -50%)",
  textAlign: "center"
});
const styleCode = (code, prismType, prismString) => {
  const html = Prism.highlight(code, prismType, prismString);
  return { __html: html };
};

const slides = [
  {
    slideName: "html - 001",
    prismType: Prism.languages.html,
    prismString: "html",
    helperText: "This is HTML. Hyper Text Markup Language.",
    render() {
      return (
        <>
          {fonts.map(font => (
            <div
              style={getCodeStyle(font)}
              dangerouslySetInnerHTML={styleCode(
                "<div> Code Quests </div>",
                this.prismType,
                this.prismString
              )}
            />
          ))}
        </>
      );
    }
  },
  {
    slideName: "css - 101",
    prismType: Prism.languages.css,
    prismString: "css",
    helperText: "This is CSS. Cascading Style Sheet.",
    render() {
      return (
        <>
          {fonts.map(font => (
            <div
              style={getCodeStyle(font)}
              dangerouslySetInnerHTML={styleCode(
                'div { color: "red" }',
                this.prismType,
                this.prismString
              )}
            />
          ))}
        </>
      );
    }
  },
  {
    slideName: "js - 201",
    prismType: Prism.languages.javascript,
    prismString: "javascript",
    helperText: "This is JavaScript.",
    render() {
      return (
        <>
          {fonts.map(font => (
            <div
              style={getCodeStyle(font)}
              dangerouslySetInnerHTML={styleCode(
                'const test = () => { return "Hi"}',
                this.prismType,
                this.prismString
              )}
            />
          ))}
        </>
      );
    }
  }
];
export default function Index() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    let newSlideIndex = slideIndex + 1;
    if (newSlideIndex >= slides.length) {
      newSlideIndex = 0;
    }
    setTimeout(() => setSlideIndex(newSlideIndex), 5000);
  }, [slideIndex]);

  return (
    <>
      <Helmet>
        {/* <link
          href="https://fonts.googleapis.com/css?family=Anonymous+Pro|Fira+Mono|IBM+Plex+Mono|Nanum+Gothic+Coding|Fira+Code|Source+Code+Pro&display=swap"
          rel="stylesheet"
        /> */}
        <link
          href="https://fonts.googleapis.com/css?family=Anonymous+Pro&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: "rebeccapurple",
          color: "white"
        }}
      >
        {slides[slideIndex].render()}
        <div
          style={{
            fontSize: "24px",
            position: "fixed",
            top: "55%",
            left: "0",
            right: "0",
            transform: "translate(0, -50%)",
            textAlign: "center"
          }}
        >
          {slides[slideIndex].helperText}
        </div>
        <div
          style={{
            fontSize: "24px",
            position: "fixed",
            bottom: "10px",
            left: "0",
            right: "0",
            transform: "translate(0, -50%)",
            textAlign: "center"
          }}
        >
          We will be on soon.
        </div>
      </div>
    </>
  );
}
