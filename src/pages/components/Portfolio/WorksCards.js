import { withRouter, Link } from 'react-router-dom'
import React from 'react'
// import { data } from '../../../data/Data'

function WorkCards(props) {
  const { works } = props
  // console.log('works props', works)
  return (
    <>
      <div className="works-wrap">
        {works.map((w, i) => (
          <div key={i} className="works-box">
            <div>
              <Link to={`/portfolio-info/${w.id}`}>
                <img
                  className="view-img"
                  src={`/img/${w.picture}`}
                  alt="預覽圖"
                  link
                  to={w.link}
                />
              </Link>
            </div>
            <div className="works-title">{w.title}</div>
            <div
              className="works-info"
              dangerouslySetInnerHTML={{
                __html: w.info,
              }}
            ></div>
          </div>
        ))}
      </div>
    </>
  )
}

export default withRouter(WorkCards)
