import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TryFreeBtn from "./components/Button";
import { faAndroid, faApple, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import './tryNow.css'

export default function TryNow() {
    return (
        <div className="TryNow-div">
            <h2>Try Whitepace today</h2>
            <p>Get started for free.<br />
                Add your whole team as your needs grow.</p>
            {/* <TryFreeBtn text="Try Taskey free " /> */}
            <p>On a big team? Contact sales</p>
            <div className="Try_icons-div">
                <FontAwesomeIcon icon={faApple} font-size="60px" style={{ color: "#ffffff", }} />
                <FontAwesomeIcon icon={faMicrosoft} font-size="60px" style={{ color: "#ffffff", }} />
                <FontAwesomeIcon icon={faAndroid} font-size="60px" style={{ color: "#ffffff", }} />
            </div>
        </div>
    )
}