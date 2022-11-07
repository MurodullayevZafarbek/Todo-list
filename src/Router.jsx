import TodoPage from "./components/TodoPage";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import NotFound from "./components/notFound";
import { Routes, Route } from "react-router-dom";


function Router() {
   
   return (
      <div className="Router">
         <Routes>
            <Route path="/" element={<TodoPage />} />
            <Route path="/categ/:id" element={<TodoPage />} />
            <Route path="/auth/signup" element={<Signup/>} />
            <Route path="/auth/signin" element={<Signin/>} />
            <Route path="*" element={<NotFound/>} />
         </Routes>
      </div>
   );
}

export default Router;
