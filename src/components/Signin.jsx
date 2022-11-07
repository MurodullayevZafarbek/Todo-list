import DATA from "./data"
import Fn from "./function"
function Signin() {
   function checkuser() {
       console.log("ok");
        let login = document.getElementById('login').value
        let password = document.getElementById('password').value
        Fn.isEmpty(login)
        Fn.isEmpty(password)
        DATA.checkUser({login,password}).then(data=>{
            if(data.title==="User not found"){
                alert("user not found")
            }
            if(data.title==="Danger"){
                alert("password Wrong")
            }
           if (data.title === "Success") {
                window.localStorage.setItem("TOKEN",data.data)
                window.location.replace('/')
            }
        })
    }
    return (
        <div className="Signin container text-center">
            <main className="form-signin w-50 m-auto mt-5">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Sign In</h1>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="login" placeholder="Zafar_123" />
                        <label htmlFor="floatingInput">Login</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button type="button" onClick={checkuser} className="w-100 btn btn-lg btn-primary mt-3">Sign In</button>
                    <a href="/auth/signup" className="btn btn-outline-warning mt-5">Sign up</a>
                </form>
            </main>
        </div>
    );
}

export default Signin;

