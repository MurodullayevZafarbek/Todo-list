import { useSelector, useDispatch } from 'react-redux'

import bin from '../assets/bin.svg'
import { useEffect } from 'react';
function Category() {
   function active1(e) {
      let element = [...e.target.querySelectorAll('div')]
      if (element.find(item => item.classList.contains('checkedColor'))) {
         element.map((item, i) => {
            setTimeout(() => {
               item.classList.remove('checkedColor')
            }, i * 100)
         })
      } else {
         let colors = [...document.querySelectorAll('.color')]
         colors.map(item => {
            let elem = [...item.querySelectorAll('div')]
            elem.map((item, i) => {
               setTimeout(() => {
                  item.classList.remove('checkedColor')
               }, i * 100)
            })
         })
         element.map((item, i) => {
            setTimeout(() => {
               item.classList.add('checkedColor')
            }, i * 100)
         })
      }

   }
   function deleteCategory(e){
      e.target.classList.add('active')
   }
   const dispatch = useDispatch()
   const category = useSelector(state => state.category.category)
   
   console.log(category);

   useEffect(() => {
      dispatch({ type:"FETCH_CATEGORY"})
   },[])

   return (
      <div className="Category">
         <h1>Category</h1>
         <input type="text" placeholder="Add cetegory" />
         <div className="categ">
            <div className="child">
               <div>
                  <div className='color' style={{ backgroundColor: 'black' }}></div>
                  <a href="/" style={{ color: 'black' }}>All</a>
               </div>
            </div>
            <div className="child">
               <div>
                  <div className='color' defaultChecked='false' onClick={active1} style={{ backgroundColor: 'red' }}>
                     <div style={{ '--i': "0", backgroundColor: "green" }}></div>
                     <div style={{ '--i': "1", backgroundColor: "black" }}></div>
                     <div style={{ '--i': "2", backgroundColor: "yellow" }}></div>
                     <div style={{ '--i': "3", backgroundColor: "pink" }}></div>
                     <div style={{ '--i': "4", backgroundColor: "purple" }}></div>
                     <div style={{ '--i': "5", backgroundColor: "blue" }}></div>
                  </div>
                  <a href="/" style={{ color: 'red' }}>All</a>
               </div>
               <div className="delete" onClick={deleteCategory}>
                  <img src={bin} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Category;
