// import { data } from './data/Data'

// const [showItems, setShowItems] = useState([])
// let copyData = data
// const [catTypes, setCatTypes] = {
//   clickKey: '全部',
//   catName: [
//     { click: true, cat: '全部', svg: <Apple /> },
//     { click: false, cat: '網頁設計', svg: <Kick /> },
//     { click: false, cat: '切版臨摹', svg: <Apple /> },
//     { click: false, cat: '功能實作', svg: <Kick /> },
//     { click: false, cat: '平面設計', svg: <Apple /> },
//   ],
// }

// // 判斷誰被點
// let catClicked = (obj, i) => {
//   setCatTypes({
//     clickKey: i, //符合的中文
//     catName: catTypes.catName.map((e) => {
//       return {
//         ...e,
//         click: e.cat === obj.cat ? true : false,
//       }
//     }),
//   })
// }



// // 篩選的函示
// let Filter = () => {
//   // let filterItem = []
//   let catFilter = copyData.cats.filter((d) => {
//     return catTypes[catTypes.clickKey].cat == d.cats
//   })
// }
