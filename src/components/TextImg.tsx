import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TryFreeBtn from "./Button";
import HeaderText from "./HeaderText";
import "./textImg.css";

interface MyTextImg {
  headText: string;
  subText: string;
  ptext: string;
  lineindex: number;
  isLeft: boolean;
  btntext: string;
  bgColor: string;
  textColor: string;
  img: any;
}

export default function TextImg({
  headText,
  lineindex,
  subText,
  isLeft,
  textColor,
  btntext,
  bgColor,
  ptext,
  img,
}: MyTextImg) {
  return (
    <div
      className={isLeft ? "TextImg-div" : "TextImgrev-div"}
      style={{
        backgroundColor: `${bgColor}`,
        color: `${textColor}`,
      }}
    >
      <div className="T_Text-div">
        <div className="T_paddingdiv">
          <HeaderText Htext={headText} textindex={lineindex} />
          <p>{ptext}</p>
          <TryFreeBtn text={btntext} />
        </div>
      </div>
      <div className="T_Img-div">
        <img src={img} alt="Photo" />
      </div>
    </div>
  );
}
