import TextImg from "./components/TextImg";
import HomePage from "./HomePage";
import "./styles.css";
import Exampic from "./assets/Exampic.png";
import Element from "./assets/Element.png";
import Circle from "./assets/Circles.png";
import offers from "./assets/offersImg.png";

import Scroll1 from "./assets/scroll1.png";
import Scroll2 from "./assets/scroll2.png";
import Scroll3 from "./assets/scroll3.png";
import Scroll4 from "./assets/scroll4.png";
import Scroll5 from "./assets/scroll5.png";
import Scroll6 from "./assets/scroll6.png";
import Scroll7 from "./assets/scroll7.png";
import Scroll8 from "./assets/scroll8.png";
import Plans from "./Plans";
import Reviews from "./Reviews";
import TryNow from "./TryNow";
import Footer from "./FooterPage";

export default function App() {
  return (
    <div className="App">
      <HomePage />
      <TextImg
        headText="Project Management"
        lineindex={2}
        subText=""
        bgColor="White"
        textColor="black"
        btntext="Get Started "
        isLeft={true}
        ptext="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
        img={Exampic}
      />
      <TextImg
        headText="Work together"
        lineindex={2}
        subText=""
        bgColor="White"
        textColor="black"
        btntext="Try it now "
        isLeft={false}
        ptext="With whitepace, share your notes with your colleagues and collaborate on them.
        You can also publish a note to the internet and share the URL with others."
        img={Circle}
      />
      <TextImg
        headText="Use as Extension"
        lineindex={3}
        subText=""
        bgColor="rgba(4, 56, 115, 1)"
        textColor="White"
        btntext="Try it now "
        isLeft={true}
        ptext="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
        img={offers}
      />
      <TextImg
        headText="Customise it to your needs"
        lineindex={2}
        subText=""
        bgColor="white"
        textColor="black"
        btntext="Let’s Go "
        isLeft={true}
        ptext="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
        img={Scroll3}
      />
      <Plans />
      <TextImg
        headText="100% your data"
        lineindex={2}
        subText=""
        bgColor="white"
        textColor="black"
        btntext="Read more "
        isLeft={true}
        ptext="The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them."
        img={Element}
      />
      <Reviews />
      <TryNow />
      <Footer />
    </div>
  );
}
