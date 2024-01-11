import Clouds from "../../components/Cloud/Clouds";
import LandingSection from "../../components/LandingSection/LandingSection";
import ScrollDown from "../../components/ScrollDown/ScrollDown";

const LandingPage: React.FC<{inView: boolean}> = ({inView}) => {


  return (
    <div className="page landing">
      <LandingSection  />
      <Clouds inView={inView}/>
      {inView && <ScrollDown />}
    </div>
  );
}

export default LandingPage;
