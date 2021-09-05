import { withRouter, Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { FaChevronLeft } from 'react-icons/fa'

//模擬資料庫
import { data } from '../data/Data'

function PortfolioInfo(props) {
  const [worksItem, setWorksItem] = useState({
    id: '4',
    picture: 'view-lunarPhase.png',
    title: 'Lunar Phase',
    info: '原創品牌女性生理用品資訊站，模擬出一個完整的電商網站。',
    infoDetail:
      '專題協作作品<br/>以女性為主客群的生理用品資訊站，推廣能重複使用的新式生理用品。更延伸至心靈層面的陪伴與關照，透過文章專欄、活動講座推廣等，與使用者一同創造更多美好的生活體驗。<br/>我負責月訂制(KIT)區塊 ＆ 心理測驗，以客製化功能增加顧客黏著度。根據使用者不同的生理用品使用需求，自由組合產品禮包，並於每個月固定日期寄出，也可隨時終止契約並退回部分費用。',
    color: ['#f7f7ee', '#fdd2bb', '#383844', '#ffffff', 'e64b4b'],
    colorInfo:
      '主視覺色系使用較為平靜清淡的色彩配置，降低主色調彩度，以月亮出現時天空的色彩為靈感。',
    cats: '全部,網頁設計',
    design: 'PhotoShop / Illustrator / AdobeXD',
    font: 'React / SCSS / Bootstrap4',
    end: 'Node.js / MySQL',
    package: 'AOS / SweetAlert',
  })

  // didMount
  // 從伺服器利用 id 抓到詳細頁資料
  useEffect(() => {
    const work = data.find((w, i) => {
      return props.match.params.id === w.id
    })
    if (work) setWorksItem(work)
  }, [])

  return (
    <>
      <main>
        <div class="profile-info-bg">
          <div class="profile-wrap">
            {/* <!-- 上一頁 --> */}
            <div
              class="row btn-goback"
              onClick={() => {
                props.history.goBack()
              }}
            >
              <FaChevronLeft class="FaChevronLeft" size="20px" />
              上一頁
            </div>

            {/* <!-- 內容展示 --> */}
            <div class="works-detail-wrap">
              <div>
                <img
                  class="detail-view-img"
                  src={`/img/${worksItem.picture}`}
                  alt="圖片預覽"
                />
                <div class="top-titlebar">
                  <div class="top-titlebar-text">
                    <div class="works-detail-title">{worksItem.title}</div>
                    <div
                      class="works-detail-info"
                      dangerouslySetInnerHTML={{
                        __html: worksItem.infoDetail,
                      }}
                    ></div>
                  </div>
                  <a class="btn-goweb" href={worksItem.link} target="_blank">
                    點我到連結
                    <br />
                    Click Me!
                  </a>
                </div>
                {/* <!--  --> */}

                {worksItem.color ? (
                  <div class="works-detail-box">
                    <div class="sub-title-box sub-title-box-detail">
                      色彩配置
                    </div>
                    <div class="detail-info-text">
                      <div class="color-box">
                        {worksItem.color.map((c, i) => (
                          <div
                            key={i}
                            class="color"
                            style={{ backgroundColor: c }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    {worksItem.colorInfo}
                  </div>
                ) : (
                  <div></div>
                )}

                {/* <!--  --> */}
                <div class="works-detail-box">
                  <div class="sub-title-box sub-title-box-detail">使用技術</div>
                  <div class="detail-info-text">
                    <div class="row">視覺 / 介面設計：{worksItem.design}</div>
                    <div class="row">前端程式開發：{worksItem.font}</div>
                    <div class="row">後端程式開發：{worksItem.end}</div>
                    <div class="row">套件：{worksItem.package}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default withRouter(PortfolioInfo)
