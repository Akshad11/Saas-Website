import { useEffect, useState } from "react";
import PlansCards from "./components/PlanCard";
import "./Plans.css";
import HeaderText from "./components/HeaderText";

interface MyPlansCard {
  hText: string;
  ptext: string;
}

export default function Plans() {
  const plansData = [
    "Sync unlimited devices",
    "10 GB monthly uploads",
    "200 MB max. note size",
    "Customize Home dashboard and access extra widgets",
    "Connect primary Google Calendar account",
    "Add due dates, reminders, and notifications to your tasks",
  ];

  const plans = [
    { type: "Free", price: "0", plansData: plansData, isA: false },
    { type: "Personal", price: "11.99", plansData: plansData, isA: true },
    { type: "Organization", price: "49.99", plansData: plansData, isA: false },
  ];

  const [activeno, setactiveno] = useState(1);

  const changeactive = (no: number) => {
    setactiveno(no);
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Plans-div">
      <h2 className="Plans_h1-div"><HeaderText Htext="Choose Your Plan" textindex={2} /> </h2>
      <p className="Plans_p-div">
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </p>
      <div className="PlansCards-div">
        {windowWidth <= 660 ? (
          <PlansCards
            plantext={plans[activeno].plansData}
            h4text={plans[activeno].type}
            h2Text={plans[activeno].price}
            isactive={true}
          />
        ) : (
          plans.map((plan, index) => (
            <PlansCards
              key={index}
              plantext={plan.plansData}
              h4text={plan.type}
              h2Text={plan.price}
              isactive={plan.isA}
            />
          ))
        )}
      </div>

      <div className="pdot-div">
        {plans.map((_, index) => (
          <div
            key={index}
            className="pd-div"
            style={{
              backgroundColor:
                activeno === index
                  ? "rgba(4, 56, 115, 1)"
                  : "rgba(79, 156, 249, 1)",
            }}
            onClick={() => changeactive(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
