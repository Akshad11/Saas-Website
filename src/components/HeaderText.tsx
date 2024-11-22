import Vector from "../assets/Vector.png";

interface MyHeaderText {
  Htext: string;
  textindex: number;
}

export default function HeaderText({ Htext, textindex }: MyHeaderText) {
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
    width: "400px",
    bottom: "-20px",
    zIndex: "-1",
  } as React.CSSProperties;
  const styleSpan = {
    position: "relative",
    zIndex: "1",
  } as React.CSSProperties;
  return (
    <div>
      <h2>{highlightNthWord(Htext, textindex)}</h2>
    </div>
  );
}
