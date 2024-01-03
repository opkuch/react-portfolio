const LandingSection: React.FC<{ isPanesShuttered: boolean }> = ({ isPanesShuttered }) => {
  console.log(isPanesShuttered);
  
  return (
    <section className={`landing-sect ${!isPanesShuttered ? "shutter" : ""}`}>
      <span className="title">
        Nadav <span className="highlight">Ben Hur</span>
      </span>
      <div className="tag-box">
        <span>web technologies</span>
        <span className="center">software development</span>
        <span>single page apps</span>
      </div>
    </section>
  );
};

export default LandingSection;
