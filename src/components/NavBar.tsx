import Logo from "../assets/Logo.png";
import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TryFreeBtn from "./Button";

export default function Navbardiv() {
  return (
    <div className="Navbar-div">
      <img src={Logo} alt="Logo" />
      <div className="Nav_listbtn-div">
        <ul className="Nav_unlist-ul">
          <li>
            Products{" "}
            <FontAwesomeIcon
              className="paddingleft10"
              icon={faAngleDown}
              style={{ color: "#ffffff" }}
            />
          </li>
          <li>
            Solutions{" "}
            <FontAwesomeIcon
              className="paddingleft10"
              icon={faAngleDown}
              style={{ color: "#ffffff" }}
            />
          </li>
          <li>
            Resources{" "}
            <FontAwesomeIcon
              className="paddingleft10"
              icon={faAngleDown}
              style={{ color: "#ffffff" }}
            />
          </li>
          <li>
            Pricing{" "}
            <FontAwesomeIcon
              className="paddingleft10"
              icon={faAngleDown}
              style={{ color: "#ffffff" }}
            />
          </li>
        </ul>
        <div className="Nav_btn-div">
          <button className="Nav_btnLog" type="submit">
            Login
          </button>
          <TryFreeBtn text="Try Whitepace free " />
        </div>
      </div>
    </div>
  );
}
