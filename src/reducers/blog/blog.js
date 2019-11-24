import actionTypes from '../../actions/actionTypes'
const initState = { 
list:[
   {
       userId:1,
       id:1,
       title:"ggggggggggggggg",
       body:"badbadbad!!!!!!!!"
   },
   {
    userId:2,
    id:2,
    title:"ggggkkkkkkkkkkkgg",
    body:"badbasadsdsadasdasdasdasasda!" 
  }
],
isLoading: false 
}
export default (state=initState , action) =>{
    switch(action.type){
       case actionTypes.START_FETCH_BLOG_LIST:
        return{
            ...state,
            isLoading:true
        }
       case actionTypes.FETCH_BLOG_LIST_SUCCESS:
           return{
               ...state,
               isLoading:false,
               list:action.payload.list ,
               errMsg:''
           }
       case actionTypes.FETCH_BLOG_LIST_FAILED:
           return{
               ...state,
               isLoading:false,
               errMsg:'something went wrong'
           }
       
        default:
            return state
    }
}