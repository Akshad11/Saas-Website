import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./planCard.css";

interface MyPlanCard {
  plantext: string[];
  h2Text: string;
  h4text: string;
  isactive: boolean;
}

export default function PlansCards({ plantext, h2Text, h4text, isactive }: MyPlanCard) {
  const [active, setinactive] = useState(false);
  const changeactive = () => {
    setinactive(!active);
  };
  const btnStyle = {
    background: "rgba(79, 156, 249, 1)",
    border: "none",
    color: "white",
  };
  const activeStyle = {
    height: "600px",
    color: "wheat",
    background:
      "linear-gradient(180deg, rgba(0,21,84,1) 0%, rgba(0,138,255,1) 100%)",
  } as React.CSSProperties;
  const inactiveStyle = {
    Height: "500px",
  } as React.CSSProperties;
  return (
    <div
      className="Plan-div"
      style={isactive ? activeStyle : inactiveStyle}
      onClick={changeactive}
    >
      <h4 style={{ color: isactive ? "white" : "black" }}>{h4text}</h4>
      <h2>${h2Text}</h2>
      <h5 style={{ color: isactive ? "white" : "black" }}>Capture ideas and find them quickly</h5>
      {plantext.map((text, index) => {
        return (
          <div key={index} className="P_IconP-div">
            <FontAwesomeIcon
              className="PlanIcon"
              icon={faCircleCheck}
              size="xl"
            />
            <p style={{ color: isactive ? "white" : "black" }}>{text}</p>
          </div>
        );
      })}

      <button className="planbtn" type="submit" style={isactive ? btnStyle : {}}>
        Get Started
      </button>
    </div>
  );
}
