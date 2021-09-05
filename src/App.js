import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import IndexMy from './pages/IndexMy'
import Portfolio from './pages/Portfolio'
import PortfolioInfo from './pages/PortfolioInfo'
import Nav from './components/Nav'
import Footer from './components/Footer'
//模擬資料庫
import { data } from './data/Data'
import { catTypes } from './data/CatTypes'

function App() {
  // // 作品原始資料
  const [works, setWorks] = useState({})

  // const [catTypes, setCatTypes] = useState({
  //   clickKey: 0,
  //   catName: [
  //     { key: 0, click: true, cat: '全部', svg: <Apple /> },
  //     { key: 1, click: false, cat: '網頁設計', svg: <Kick /> },
  //     { key: 2, click: false, cat: '切版臨摹', svg: <Apple /> },
  //     { key: 3, click: false, cat: '功能實作', svg: <Kick /> },
  //     { key: 4, click: false, cat: '平面設計', svg: <Apple /> },
  //   ],
  // })

  // // 初始化資料
  useEffect(() => {
    // 模擬和伺服器要資料
    // 最後設定到狀態中
    setWorks(data)
    // setDisplayWorks(data)
  }, [])

  // //偵測點擊3小可愛事件函式
  // const threeClick = (obj, k) => {
  //   setCuteBtn({
  //     // show: true,
  //     // 判斷是誰被點
  //     clickKey: k,
  //     arr: cuteBtn.arr.map((e) => {
  //       return {
  //         ...e,
  //         // obj到時候要放觸發函式的變數，也就是e
  //         // 原本的 e 裡的 kitCategory 與被觸發的 obj.kitCategory 相同時，表示被按下 click:true
  //         click:
  //           //e.kitCategory === obj.kitCategory? !e.click? true:false
  //           e.cat === obj.cat ? true : false,
  //       }
  //     }),
  //   })
  // const handleTags = (products, tags) => {
  //   let newProducts = [...products]

  //   // 處理勾選標記
  //   if (tags.length > 0) {
  //     newProducts = [...newProducts].filter((product) => {
  //       let isFound = false
  //       // 原本資料裡的tags字串轉為陣列
  //       const productTags = product.tags.split(',')

  //       for (let i = 0; i < tags.length; i++) {
  //         if (productTags.includes(tags[i])) {
  //           return true
  //         }
  //       }

  //       return isFound
  //     })
  //   }

  //   return newProducts
  // }
  let newCatTypes = catTypes
  // 判斷誰被點 + 篩選
  let catClicked = (obj) => {
    console.log('obj', obj)
    newCatTypes = {
      clickKey: obj.key,
      catName: newCatTypes.catName.map((e) => {
        return {
          ...e,
          click: e.cat === obj.cat ? true : false,
        }
      }),
    }

    console.log('newCatTypes', newCatTypes)
    // console.log('newCatTypes.clickKey', newCatTypes.clickKey)
    let catFilter = data.filter((d) => {
      // console.log('d', d)
      return d.cats.includes(newCatTypes.catName[newCatTypes.clickKey].cat)
    })
    console.log('catFilter', catFilter)
    setWorks(catFilter)
  }

    // useEffect(() => {
    //   setWorks()
    // }, [works])

  return (
    <>
      <Router>
        <Nav />
        <>
          {/* 路由表 */}
          <Switch>
            {/* 定義網址參數 */}
            <Route path="/portfolio-info/:id?">
              <PortfolioInfo />
            </Route>
            <Route path="/portfolio">
              <Portfolio
                catTypes={catTypes}
                works={works}
                catClicked={catClicked}
              />
            </Route>
            <Route exact path="/">
              <IndexMy />
            </Route>
          </Switch>
        </>
      </Router>
      <Footer />
    </>
  )
}
export default App
