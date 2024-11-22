import PlansCards from "./components/PlanCard";
import "./Plans.css";

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
  return (
    <div className="Plans-div">
      <h2 className="Plans_h1-div">Choose Your Plan</h2>
      <p className="Plans_p-div">
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </p>
      <div className="PlansCards-div">
        <PlansCards plantext={plansData} h2Text="0" h4text="Free" isactive={false} />
        <PlansCards plantext={plansData} h2Text="11.99" h4text="Personal" isactive={true} />
        <PlansCards plantext={plansData} h2Text="49.99" h4text="Organization" isactive={false} />
      </div>{" "}
    </div>
  );
}
