import axios from 'axios'
let URL = "http://localhost:5000/"

let addUser=async (user)=>{
    let data = await axios.post(URL+"auth/signup",user)
    return data.data
}

let checkUser=async (user)=>{
    let data = await axios.post(URL+"auth/signin",user)
    return data.data
}
export default {addUser,checkUser}