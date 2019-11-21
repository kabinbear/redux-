import actionType from './actionType'

export const increment = (id) => {
    return {
        type: actionType.CART_AMOUNT_INCREMENT,
        payload:{
            id
        }
    }
}


export const decrement = (id) => {
    return {
        type: actionType.CART_AMOUNT_DECREMENT,
        payload: {
            id
        }
    }
}
//异步action，使用redux-thunk之后， 就可以在actionCreator 里 return 一个方法，这个方法的参数是dispatch 
// export const decrementAsync = (id) =>{
//    return (dispatch) =>{
//        setTimeout(() => {
//            dispatch(decrement())
//        }, 2000);
//    }
// }
export const decrementAsync = id => dispatch =>{
        setTimeout(() => {
            dispatch(decrement(id))
        }, 2000);
    }
 