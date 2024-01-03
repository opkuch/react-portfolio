const LandingSection: React.FC<{ isPanesShuttered: boolean }> = ({ isPanesShuttered }) => {
  console.log(isPanesShuttered);
  
  return (
    <section className={`landing-sect ${!isPanesShuttered ? "shutter" : ""}`}>
      <span className="title">
        Nadav<div className="highlight">Benhur</div>
      <span className="sub">software & web</span>
      </span>
      <div className="tag-box">
        <span>&#x2022;<span className="emphasis">web</span>technologies&#x2022;</span> 
        <span className="center">&#x2022;software <span className="emphasis">development</span>&#x2022;</span>
        <span>&#x2022;<span className="emphasis">single-page</span> apps&#x2022;</span>
      </div>
    </section>
  );
};

export default LandingSection;
