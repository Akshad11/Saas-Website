import { useState } from "react";
import Vector2 from "../assets/Vector2.png";
import VectorW from "../assets/VectorW.png";
import './reviewCard.css'

interface MyReviewCard {
  isClicked: boolean;
  Face: any;
  Onclicks: (pos: number) => {};
  pos: number;
}

export default function ReviewCard({ isClicked, Face, Onclicks, pos }: MyReviewCard) {
  return (
    <div className="ReviewCard-div" style={{ backgroundColor: isClicked ? "white" : "rgba(79, 156, 249, 1)", color: isClicked ? "black" : "white" }} onClick={() => Onclicks(pos)}>
      <div className="ReviewC_Vec-div">
        <img
          className="RC_vec1"
          src={isClicked ? Vector2 : VectorW}
          alt="Vector"
        />
        <img
          className="RC_vec1"
          src={isClicked ? Vector2 : VectorW}
          alt="Vector"
        />
      </div>
      <div className="ReviewC_p-div">
        <p>
          Whitepate is designed as a collaboration tool for businesses that is a
          full project management solution.
        </p>
      </div>
      <div className="RC_Hface-div">
        <img src={Face} alt="Face" />
        <div className="RC_h2-div">
          <h2>Oberon Shaw, MCH</h2>
          <p>Head of Talent Acquisition, North America</p>
        </div>
      </div>
    </div >
  );
}
