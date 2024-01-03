const LandingSection: React.FC<{ isPanesShuttered: boolean }> = ({ isPanesShuttered }) => {
  console.log(isPanesShuttered);
  
  return (
    <section className={`landing-sect ${!isPanesShuttered ? "shutter" : ""}`}>
      <span className="title">
        Nadav <span className="highlight">Ben Hur</span>
      </span>
      <div className="tag-box">
        <span><span className="emphasis">web</span>technologies</span>
        <span className="center">software <span className="emphasis">development</span></span>
        <span><span className="emphasis">single-page</span> apps</span>
      </div>
    </section>
  );
};

export default LandingSection;
