//在实际的项目中 ，由于只有单一的store ， 但是状态会有很多分类，所以我们需要划分 reducer， createStore 的参数又只接受一个reducer，所以redux比较聪明的提供了用于合并reducer的方法。

import {combineReducers} from 'redux'

import cart from './cart'

export default combineReducers({
    cart 
})


 