import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { render } from "react-dom";

interface Mybtn {
  text: string;
}

export default function TryFreeBtn({ text }: Mybtn) {
  const btnfree = {
    width: "190px",
    height: "50px",
    backgroundColor: "rgba(79, 156, 249, 1)",
    color: "white",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <button className="Nav_btnfree" style={btnfree} type="submit">
      {text}
      <FontAwesomeIcon
        icon={faArrowRight}
        size="xl"
        style={{ color: "#ffffff" }}
      />
    </button>
  );
}
