import Item from "./Item";
function Task() {
   return (
      <div className="Task">
         <h1>All Tasks</h1>
         <input type="text" placeholder="Add cetegory" />
         <Item />
      </div>
   );
}

export default Task;
