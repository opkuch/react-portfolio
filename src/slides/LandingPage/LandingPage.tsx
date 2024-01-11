import Clouds from "../../components/Cloud/Clouds";
import LandingSection from "../../components/LandingSection/LandingSection";
import Logo from "../../components/Logo/Logo";
import ScrollDown from "../../components/ScrollDown/ScrollDown";

const LandingPage: React.FC<{}> = () => {


  return (
    <div className="app-container">
      <LandingSection  />
      <Clouds />
      <Clouds isInverse={true} />
      <ScrollDown />
    </div>
  );
}

export default LandingPage;
