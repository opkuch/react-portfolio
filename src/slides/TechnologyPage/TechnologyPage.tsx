import React from 'react'
import Card from '../../components/Card/Card'
import brainSvg from '../../assets/brain2.svg'
import eyeSvg from '../../assets/eye.svg'
import teamSvg from '../../assets/team.svg'
import codingSvg from '../../assets/coding.svg'
import Clouds from '../../components/Cloud/Clouds'

const TechnologyPage: React.FC<{ inView: boolean }> = ({ inView }) => {
  return (
    <div className="page technology">
      <Clouds isInverse={true} inView={inView} />

      <div className="container">
        <Card imgSrc={codingSvg} header="Code" subHeader="Enthusiastic" />
        <Card imgSrc={teamSvg} header="Team" subHeader="Collaborator" />
        <Card imgSrc={brainSvg} header="Think" subHeader="Differently" />
        <Card imgSrc={eyeSvg} header="Design" subHeader="Reponsivity & PP" />
      </div>
    </div>
  )
}

export default TechnologyPage
