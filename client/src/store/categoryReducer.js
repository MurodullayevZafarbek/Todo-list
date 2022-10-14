import axios from "axios"
const defaultState = {
   category:[]
}


async function fetchingCategory() {
   let data = await axios.get("http://localhost:5000/category", {
      headers: {
         "x-access-token":window.localStorage.getItem("TOKEN")
      }
   })
   return data.data
}

export const categoryReducer = (state = defaultState, action) => {
   switch (action.type) {
      case "FETCH_CATEGORY":
         return { ...state, category: fetchingCategory() }
      default:
         return state
   }
}