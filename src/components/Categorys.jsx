import { useSelector, useDispatch } from 'react-redux'

import bin from '../assets/bin.svg'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
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
   function deleteCategory(e,id){
      e.target.classList.add('active')
      setTimeout(() => {
         axios.delete(`http://localhost:5000/category/${id}`, {
            headers: {
               "x-access-token": window.localStorage.getItem("TOKEN")
            }
         }).then(data => {
            if (data) {
               console.log(data);
               dispatch({ type: "FETCH_CATEGORY" })
            }
         })
      },1000)
   }
   function changeColor(e,id,color) {
      axios.put(`http://localhost:5000/category/${id}`, {
         token: window.localStorage.getItem("TOKEN"),
         color
      }).then(data => {
         dispatch({ type: "FETCH_CATEGORY" })
      })
   }
   const dispatch = useDispatch()
   const category = useSelector(state => state.category.category)
   
   const [categoryState,setCategoryState] = useState([])

   category.then(data => {
      setCategoryState(data.data)
   })
   
   useEffect(() => {
      dispatch({ type:"FETCH_CATEGORY"})
   }, [])
   
   async function addCategory(e) {
      if (e.charCode === 13) {
         if (e.target.value.length === 0) {
            alert("Fill the form")
         }
         let data = await axios.post("http://localhost:5000/category", {
            token: window.localStorage.getItem("TOKEN"),
            name:e.target.value
         })
         if (data) {
            e.target.value=""
            dispatch({ type: "FETCH_CATEGORY" })
         }
      }
   }

   return (
      <div className="Category">
         <h1>Category</h1>
         <input onKeyPress={addCategory} type="text" placeholder="Add cetegory" />
         <div className="categ">
            <div className="child">
               <div>
                  <div className='color' style={{ backgroundColor: 'black' }}></div>
                  <a href="/" style={{ color: 'black' }}>All</a>
               </div>
            </div>
            {categoryState.map(item => {
               return (
                  <div key={item._id} className="child">
                     <div>
                        <div className='color' defaultChecked='false' onClick={active1} style={{ backgroundColor: item.color }}>
                           <div onClick={(e)=>{changeColor(e,item._id,"green")}} style={{ '--i': "0", backgroundColor: "green" }}></div>
                           <div onClick={(e)=>{changeColor(e,item._id,"black")}} style={{ '--i': "1", backgroundColor: "black" }}></div>
                           <div onClick={(e)=>{changeColor(e,item._id,"yellow")}} style={{ '--i': "2", backgroundColor: "yellow" }}></div>
                           <div onClick={(e)=>{changeColor(e,item._id,"pink")}} style={{ '--i': "3", backgroundColor: "pink" }}></div>
                           <div onClick={(e)=>{changeColor(e,item._id,"purple")}} style={{ '--i': "4", backgroundColor: "purple" }}></div>
                           <div onClick={(e)=>{changeColor(e,item._id,"blue")}} style={{ '--i': "5", backgroundColor: "blue" }}></div>
                        </div>
                        <a href={`/categ/${item._id}`} style={{ color: item.color }}>{ item.name }</a>
                     </div>
                     <div className="delete" onClick={(e) => { deleteCategory(e,item._id) }}>
                        <img src={bin} alt="" />
                     </div>
                  </div>
               )
            })}
         </div>
      </div>
   );
}

export default Category;
