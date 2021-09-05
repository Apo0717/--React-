import React from 'react'

import CatList from './components/Portfolio/CatList'
import WorksCards from './components/Portfolio/WorksCards'
// import Page from './components/Portfolio/Page'

function Portfolio(props) {
  const { catTypes, works, 
    catClicked,
     filter } = props
  return (
    <>
      <main>
        <div className="profile-info-bg">
          <div className="profile-wrap">
            {/* <!-- 最上方分類 --> */}
            <CatList
              catTypes={catTypes}
              catClicked={catClicked}
              filter={filter}
            />
            {/* <!-- 內容展示 --> */}
            <WorksCards works={works} />
            {/* <!-- 頁碼 --> */}
            {/* <Page /> */}
          </div>
        </div>
      </main>
    </>
  )
}

export default Portfolio
