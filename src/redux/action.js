import axios from 'axios'
export const FETCHED_SUCCESS = "FETCHED_SUCCESS"
export const FETCHED_FAILED = "FETCHED_FAILED"

export const fetchDataSuccess = data => {
   return {
      type: FETCHED_SUCCESS,
      data: data
   }
}

export const fetchDataFailed = data => {
   return{
      type: FETCHED_FAILED,
   }
}


export const fetchData  = () => dispatch => {
      axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
       .then((res => {
         let data = res.data;
         dispatch(fetchDataSuccess(data))
       }))
       .catch(err => {
         dispatch(fetchDataFailed(err))
       })
   
    
}

