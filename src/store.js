//createStore 是redux提供的一个用于创建store的方法 ，
import { createStore, applyMiddleware } from 'redux' 
import thunk from 'redux-thunk'
//引入全并后的reducer 
import rootReducer from './reducers/index'
// createStore 的第一个参数必须一个reducer，如果是多个，请在reducers 目录下先使用combineReducers 全并之后再导出 
export default createStore(rootReducer , applyMiddleware(thunk))