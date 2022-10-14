import Categorys from "./Categorys";
import Task from "./Task";
import "./TodoPage.css"

function TodoPage() {
   function check() {
      let token = window.localStorage.getItem('TOKEN');
      if (!token) {
         window.location.replace("/auth/signin")
      }
   }
   check();
   return (
      <div className="TodoPage">
         <Categorys />
         <Task/>
      </div>
   );
}

export default TodoPage;
