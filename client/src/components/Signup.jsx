import DATA from "./data"
import Fn from "./function"
function signup() {
    async function addUser(e) {
        let name = document.getElementById('userName').value
        let login = document.getElementById('login').value
        let password = document.getElementById('password').value
        Fn.IsEmpty(name)
        Fn.IsEmpty(login)
        Fn.IsEmpty(password)
        let data = await DATA.addUser({name,login,password})
        if(data.title==="User added"){
            window.location.replace('/auth/signin')
        }
        if(data.message==='exsist'){
            alert("User olready exsist")
        }
    }
    return (
        <div className="signup container text-center">
            <main className="form-signin w-50 m-auto mt-5">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="userName" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">User Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="login" placeholder="Zafar_123" />
                        <label htmlFor="floatingInput">Login</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button onClick={addUser} className="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign Up</button>
                    <a href='/auth/signin' className="btn btn-outline-warning mt-5">or have an account</a>
                </form>
            </main>
        </div>
    );
}

export default signup;

