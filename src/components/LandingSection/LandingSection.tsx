import Title from "../Title/Title";

const LandingSection: React.FC<{  }> = ({  }) => {
  
  return (
    <section className={`landing-sect`}>
      <span className="title">
        <Title text="Nadav Ben Hur"/>
      <span className="sub"><strong>software & web</strong></span>
      </span>
      {/* <div className="tag-box">
        <span>&#x2022;<span className="emphasis">web</span>technologies</span> 
        <span className="center">&#x2022;<span className="emphasis">software</span>&#x2022;</span>
        <span>&#x2022;<span className="emphasis">single-page</span> apps</span>
      </div> */}
    </section>
  );
};

export default LandingSection;
