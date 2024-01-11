import React from 'react'

const Card: React.FC<{ imgSrc: string; header: string; subHeader: string }> = ({
  imgSrc,
  header,
  subHeader,
}) => {
  return (
    <div className="card">
      <div className="box">
        <div className="content">
          <div className="img">
            <img src={imgSrc} />
          </div>
          <div className="cardContent">
            <h3>
              {header}
              <span>{subHeader}</span>
            </h3>
          </div>
        </div>
        <ul className="sci">
          <li style={{ '--i': 1 } as React.CSSProperties}>ashjodas asljdkhasjkhd asdhasd sajdhasjdh asdhasj dasdjas</li>
          <li style={{ '--i': 2 } as React.CSSProperties}>ashjodas asljdkhasjkhd asdhasd sajdhasjdh asdhasj dasdjas</li>
          <li style={{ '--i': 3 } as React.CSSProperties}>ashjodas asljdkhasjkhd asdhasd sajdhasjdh asdhasj dasdjas</li>
        </ul>
      </div>
    </div>
  )
}

export default Card
