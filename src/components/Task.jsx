import Item from "./Item";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function Task() {
   const {id} = useParams()
   const dispatch = useDispatch()
   const category = useSelector(state => state.category.category)

   const [categoryState, setCategoryState] = useState([])
   
   category.then(data => {
      setCategoryState(data.data)
   })

   function categoryItemAdd(e) {
      if (e.charCode === 13) {
         axios.post(`http://localhost:5000/category/list/${id}`, {
            token: window.localStorage.getItem("TOKEN"),
            title:e.target.value
         }).then(data => {
            if (data) {
               dispatch({ type: "FETCH_CATEGORY" })
               e.target.value=""
            }
         })
      }
   }

   useEffect(() => {
      dispatch({ type: "FETCH_CATEGORY" })
   }, [])
   function checkId(id) {
      if(!id){
         return (
               categoryState.map(category => {
                  return (
                     category.list.map(item => {
                        return (
                           <div key={item._id}>
                              <Item data={item} category={category} />
                           </div>
                        )
                     })
                  )
               })
         )
      } else {
         return (
            categoryState.filter(elem => elem._id == id).map(category => {
               return (
                  category.list.map(item => {
                     return (
                        <div key={item._id}>
                           <Item data={item} category={category} />
                        </div>
                     )
                  })
               )
            })
         )
      }
   }
   function logOut() {
      window.localStorage.removeItem("TOKEN")
      axios.delete("http://localhost:5000/auth/logout", {
         headers: {
            "x-access-token": window.localStorage.getItem("TOKEN")
         },
         token:window.localStorage.getItem("TOKEN")
      }
      )
      window.location.reload()
   }
   return (
      <div className="Task">
         <h1>All Tasks</h1>
         <button onClick={logOut} className="btn btn-primary" style={{width:"200px"}}>LOG out</button>
         {id && <input type="text" onKeyPress={categoryItemAdd} placeholder="Add cetegory" />}
         {checkId(id)}
      </div>
   );
}

export default Task;
