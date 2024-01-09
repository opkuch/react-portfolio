import Title from "../Title/Title";

const LandingSection: React.FC<{ isPanesShuttered: boolean }> = ({ isPanesShuttered }) => {
  
  return (
    <section className={`landing-sect ${!isPanesShuttered ? "shutter" : ""}`}>
      <span className="title">
        <Title text="Nadav Ben Hur"/>
      <span className="sub"><strong>software & web</strong></span>
      </span>
      <div className="tag-box">
        <span>&#x2022;<span className="emphasis">web</span>technologies</span> 
        <span className="center">&#x2022;<span className="emphasis">software</span>development</span>
        <span>&#x2022;<span className="emphasis">single-page</span> apps</span>
      </div>
    </section>
  );
};

export default LandingSection;
