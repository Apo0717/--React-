import React from 'react'
import { data } from '../../../data/Data'

function CatList(props) {
  const { catTypes, catClicked } = props
  // console.log('cats-props', props)

  return (
    <>
      <div className="works-cat-wrap">
        {catTypes.catName.map((c) => (
          <div
            className={'cat-row ' + (c.click ? 'cat-row-click' : '')}
            onClick={() => {
              catClicked(c)
            }}
          >
            <div>{c.svg}</div>
            <div className="cat-underline">{c.cat}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CatList
