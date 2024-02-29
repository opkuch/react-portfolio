import React from 'react'
import Card from '../../components/Card/Card'
import brainSvg from '../../assets/brain.svg'
import teamSvg from '../../assets/team.svg'
import codingSvg from '../../assets/coding.svg'

const TechnologyPage: React.FC<{ inView: boolean }> = ({ inView }) => {
  return (
    <div className="page technology">
      {/* <Clouds isInve1rse={true} inView={inView} /> */}

      <div className={`container ${inView && 'spiral-enter-active'}`}>
        {/* <Card
          index={1}
          imgSrc={teamSvg}
          title="Team"
          subTitle="Collaborator"
          moveValue={5}
          description={
            'With a proven ability to manage projects and tackle challenging missions independently, I am well-versed in navigating complex tasks with a strategic mindset. Beyond solo endeavors, I bring valuable experience working seamlessly within cross-functional teams, thriving in the fast-paced and dynamic environment of agile methodologies.'
          }
        />
        <Card
          index={2}
          imgSrc={brainSvg}
          title="Think"
          subTitle="Out of the box"
          moveValue={-5}
          description={
            'My success in overcoming challenges lies in a versatile blend of technical expertise, open-mindedness, and out-of-the-box thinking. Adapting to diverse technologies and embracing creative solutions enables me to consistently find innovative answers to complex problems.'
          }
        /> */}
      </div>
    </div>
  )
}

export default TechnologyPage
