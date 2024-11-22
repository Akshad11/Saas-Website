import ReviewCard from "./components/ReviewCard";
import Face1 from "./assets/face1.png";
import Face2 from "./assets/face2.png";
import Face3 from "./assets/face3.png";
import HeaderText from "./components/HeaderText";
import './reviews.css'
import { useState } from "react";

export default function Reviews() {
  const Faces = [Face1, Face2, Face3];

  const [activedots, setactivedots] = useState(1);

  const changeactivedots = (dotpos: number) => {
    setactivedots(dotpos);
  };

  const [activeClick, setactiveClick] = useState(0);

  const changeactiveClick = (pos: number) => {
    console.log('clicked')
    setactiveClick(pos);
  };

  return (
    <div className="Reviews-div">
      <h2 className="Reviews-h2"><HeaderText Htext="What Our Clients Says" textindex={3} /></h2>
      <div className="Re_Card-div">
        {Faces.map((face, index) => {
          return (
            <ReviewCard key={index} isClicked={activeClick == index ? true : false} Face={face} pos={index} Onclicks={() => changeactiveClick} />
          )

        })}
      </div>
      <div className="Review-dot">
        <div className="R_dot" style={{ backgroundColor: activedots == 1 ? "rgba(4, 56, 115, 1)" : "rgba(79, 156, 249, 1)" }} onClick={() => changeactivedots(1)}></div>
        <div className="R_dot" style={{ backgroundColor: activedots == 2 ? "rgba(4, 56, 115, 1)" : "rgba(79, 156, 249, 1)" }} onClick={() => changeactivedots(2)}></div>
        <div className="R_dot" style={{ backgroundColor: activedots == 3 ? "rgba(4, 56, 115, 1)" : "rgba(79, 156, 249, 1)" }} onClick={() => changeactivedots(3)}></div>
      </div>
    </div>
  );
}
