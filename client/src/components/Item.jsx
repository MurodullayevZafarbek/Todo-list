import bin from '../assets/bin.svg'
import check from '../assets/check.svg'
function Item({data}) {
   function deleteItem(e){
      e.target.querySelector('.delete').classList.add('active')
   }
   return (
      <div className="Item">
         <div className="inp">
            <input onClick={(e) => !e.target.checked} type="checkbox" />
            <img src={check} alt="" />
         </div>
         <p>Lorem ipsum dolor sit amet.</p>
         <button onClick={(e)=>{deleteItem(e)}} style={{backgroundColor:"red"}}>Uncategorized <div className='delete'><img src={bin} width="10px" alt="" /></div></button>
      </div>
   );
}

export default Item;
