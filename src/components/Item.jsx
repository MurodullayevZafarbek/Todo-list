import axios from 'axios';
import bin from '../assets/bin.svg'
import { useDispatch } from 'react-redux'
import check from '../assets/check.svg'
import { useParams } from 'react-router-dom';

function Item({ data, category }) {
   const dispatch = useDispatch()
   function deleteItem(e, categoryId, id) {
      e.target.querySelector('.delete').classList.add('active')
      setTimeout(() => {
         axios.delete(  `http://localhost:5000/category/list/${categoryId}/${id}`, {
            headers: {
               'x-access-token': window.localStorage.getItem("TOKEN")
            },
            token: window.localStorage.getItem("TOKEN")
         }).then(data => {
            if (data) {
               dispatch({ type: "FETCH_CATEGORY" })
            }
         })
      }, 1000)
   }
   function updateItem(e, categoryId, id) {
      axios.put(`http://localhost:5000/category/list/${categoryId}/${id}`, {
         token: window.localStorage.getItem("TOKEN"),
         status: e.target.checked
      }).then(data => {
         if (data) {
            dispatch({ type: "FETCH_CATEGORY" })
         }
      })
   }
   return (
      <div className="Item">
         <div className="inp">
            <input defaultChecked={data.status} onClick={(e) => { updateItem(e, category._id, data._id) }} type="checkbox" />
            <img src={check} alt="" />
         </div>
         <p>{data.title}</p>
         <button onClick={(e) => { deleteItem(e, category._id, data._id) }} style={{ backgroundColor: category.color }}>{category.name} <div className='delete'><img src={bin} width="10px" alt="" /></div></button>
      </div>
   );
}

export default Item;
