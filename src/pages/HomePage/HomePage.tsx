import Indicator from "../../components/Indicator/Indicator";
import Gallery from "./parts/Gallery/Gallery";
import Header from "./parts/Header/Header";

const HomePage = () => {  
  
  return (
    <div className="home-page"> 
      <Header />
      <Gallery />
      <Indicator />
    </div>
  );
}

export default HomePage;
