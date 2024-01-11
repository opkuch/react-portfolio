import Title from '../Title/Title'

const LandingSection: React.FC<{}> = ({}) => {
  return (
    <section className={`landing-sect`}>
      <div className="title">
        <Title text="Nadav Ben Hur" />
        <div className="content">
          <div className="content__container">
            <ul className="content__container__list">
              <li className="content__container__list__item">Frontend</li>
              <li className="content__container__list__item">Backend</li>
              <li className="content__container__list__item">UI/UX</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="tag-box">
        <span>&#x2022;<span className="emphasis">web</span>technologies</span> 
        <span className="center">&#x2022;<span className="emphasis">software</span>&#x2022;</span>
        <span>&#x2022;<span className="emphasis">single-page</span> apps</span>
      </div> */}
    </section>
  )
}

export default LandingSection
