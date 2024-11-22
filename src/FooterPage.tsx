import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "./assets/Logo.png";

import "./footerPage.css";

export default function Footer() {
  return (
    <div className="footer-div">
      <div className="f_componyText-div">
        <div className="f_logo-div">
          <img src={Logo} alt="Logo" />
          <h4>
            We are not here to sell you products, we sell value through our
            expertise.
          </h4>
          <div>
            <FontAwesomeIcon
              className="f_icons"
              icon={faFacebook}
              size="2xl"
              style={{ color: "#ffffff" }}
            />
            <FontAwesomeIcon
              className="f_icons"
              icon={faTwitter}
              size="2xl"
              style={{ color: "#ffffff" }}
            />
            <FontAwesomeIcon
              className="f_icons"
              icon={faLinkedin}
              size="2xl"
              style={{ color: "#ffffff" }}
            />
            <FontAwesomeIcon
              className="f_icons"
              icon={faInstagram}
              size="2xl"
              style={{ color: "#ffffff" }}
            />
          </div>
        </div>
        <div className="f_address-div">
          <div>
            <h4>Address:</h4>
            <p>38 opebi Road, Ikeja, Lagos State, Nigeia.</p>
            <h4>Phone:</h4>
            <p>+2349022396389</p>
            <h4>Email:</h4>
            <p>contact@contentionary.com</p>
          </div>
        </div>
        <div className="f_compony-div">
          <div>
            <h3>Compony</h3>
            <p>About Us</p>
            <p>Features</p>
            <p>Pricing</p>
          </div>
        </div>
      </div>
      <div className="f_Input-div">
        <h3>Subscribe to get latest updates</h3>
        <div className="Input-div">
          <input placeholder="Your Email address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="F_end-div">
        <h2>Contentionary</h2>
        <h3>Powered By Contentionary</h3>
      </div>
    </div>
  );
}
