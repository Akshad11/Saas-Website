import { useEffect, useState } from "react";
import Vector from "../assets/Vector.png";

interface MyHeaderText {
  Htext: string;
  textindex: number;
}

export default function HeaderText({ Htext, textindex }: MyHeaderText) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const highlightNthWord = (text: string, nth: number) => {
    const words = text.split(" ");
    return words.map((word, index) =>
      index === nth - 1 ? (
        <span key={index} style={styleSpan}>
          {word} <img style={styleImg} src={Vector} alt="photo" />
        </span>
      ) : (
        <span key={index} style={styleSpan}>{word} </span>
      )
    );
  };

  const styleImg = {
    position: "absolute",
    left: "0px",
    bottom: "0px",
    zIndex: "-1",
    width: "100%", // Adjust width based on screen size
  } as React.CSSProperties;

  const styleSpan = {
    position: "relative",
    zIndex: "1",
  } as React.CSSProperties;

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h2>{highlightNthWord(Htext, textindex)}</h2>
    </div>
  );
}
