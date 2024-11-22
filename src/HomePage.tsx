import Navbardiv from "./components/NavBar";
import "./homePage.css";
import pplPhoto from "./assets/2pplPhoto.png";
import TryFreeBtn from "./components/Button";
import backLines from "./assets/lines.png";

export default function HomePage() {
  return (
    <div className="Home-div">
      <Navbardiv />
      <div
        className="H_top-div"
        style={{
          backgroundImage: `url(${backLines})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="Home_text-div">
          <h1>Get More Done with whitepace</h1>
          <p>
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <TryFreeBtn text="Try Whitepace free " />
        </div>
        <div className="Home_img-div">
          <img src={pplPhoto} alt="Photo" />
        </div>
      </div>
    </div>
  );
}
