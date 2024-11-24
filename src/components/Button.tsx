import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Define the props interface
interface Mybtn {
  text: string;

}

export default function TryFreeBtn({ text }: Mybtn) {
  // Base button styles
  const btnfree = {

    backgroundColor: "rgba(79, 156, 249, 1)",
    color: "white",
    border: "none",
    borderRadius: "5px",
    display: "flex",
    padding: "10px",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px", // Space between text and icon
    cursor: "pointer",
  };

  // Media query adjustments
  const mediaStyles = `
    @media only screen and (max-width: 690px) {
      .responsive-btn {
        width: 130px;
        height: 40px;
        font-size: 14px;
      }
    }

    @media only screen and (max-width: 992px) {
      .responsive-btn {
        width: 170px;
        height: 45px;
        font-size: 15px;
      }
    }
      @media only screen and (min-width: 1024px) {}

    @media only screen and (min-width: 1200px) {
      .responsive-btn {
        width: 190px;
        height: 50px;
        font-size: 16px;
      }
    }
  `;

  // Inject styles into the document head
  React.useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = mediaStyles;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, [mediaStyles]);

  return (
    <button
      className="responsive-btn"
      style={btnfree}
      type="submit"
      aria-label={text}
    >
      {text}
      <FontAwesomeIcon icon={faArrowRight} size="xl" style={{ color: "#ffffff" }} />
    </button>
  );
}
