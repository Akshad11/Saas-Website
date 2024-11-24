import Logo from "../assets/Logo.png";
import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowRight, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import TryFreeBtn from "./Button";
import { useState } from "react";

export default function Navbardiv() {
  const [ismenuclick, setmenuclick] = useState(false);

  const changmenuclick = () => {
    setmenuclick(!ismenuclick)
  }
  const [ismenuclick1, setmenuclick1] = useState(false);

  const changmenuclick1 = () => {
    setmenuclick1(!ismenuclick1)
  }
  return (
    <div className="Navbar-div">
      <img src={Logo} alt="Logo" />
      <FontAwesomeIcon className="hammenu" icon={ismenuclick ? faX : faBars} size="2xl" style={{ color: "#ffffff", }} onClick={changmenuclick} />
      <div className={ismenuclick ? "Nav_listbtn-div hamshow" : "Nav_listbtn-div hamhide"}>
        <ul className={ismenuclick1 ? "Nav_unlist-ul ullistSmenu" : "Nav_unlist-ul ullistHmenu"}>
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
        <div className="Nav_btn-div btnmenu">
          <button className="Nav_btnLog" type="submit">
            Login
          </button>
          <TryFreeBtn text="Try Whitepace free " />
        </div>
      </div>
      <FontAwesomeIcon className="hammenu1" icon={ismenuclick1 ? faX : faBars} size="2xl" style={{ color: "#ffffff", }} onClick={changmenuclick1} />
    </div>
  );
}
