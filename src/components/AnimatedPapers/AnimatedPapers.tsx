import React from 'react'

function AnimatedPapers() {
  return (
    <div id="app">
      <div className="papers" style={{ '--total': 5 } as React.CSSProperties}>
        <div
          className="paper -rogue"
          style={{ '--i': 0 } as React.CSSProperties}
        >
          <div className="segment">
            <div className="segment">
              <div className="segment">
                <div className="segment">
                  <div className="segment"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="paper" style={{ '--i': 1 } as React.CSSProperties}>
          <div className="segment">
            <div className="segment">
              <div className="segment">
                <div className="segment">
                  <div className="segment"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="paper" style={{ '--i': 2 } as React.CSSProperties}>
          <div className="segment">
            <div className="segment">
              <div className="segment">
                <div className="segment">
                  <div className="segment"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="paper" style={{ '--i': 3 } as React.CSSProperties}>
          <div className="segment">
            <div className="segment">
              <div className="segment">
                <div className="segment">
                  <div className="segment"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="paper" style={{ '--i': 4 } as React.CSSProperties}>
          <div className="segment">
            <div className="segment">
              <div className="segment">
                <div className="segment">
                  <div className="segment"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow">
        <div
          className="paper-shadow"
          style={{ '--i': 0 } as React.CSSProperties}
        ></div>
        <div
          className="paper-shadow"
          style={{ '--i': 1 } as React.CSSProperties}
        ></div>
        <div
          className="paper-shadow"
          style={{ '--i': 2 } as React.CSSProperties}
        ></div>
        <div
          className="paper-shadow"
          style={{ '--i': 3 } as React.CSSProperties}
        ></div>
        <div
          className="paper-shadow"
          style={{ '--i': 4 } as React.CSSProperties}
        ></div>
      </div>
    </div>
  )
}

export default AnimatedPapers
