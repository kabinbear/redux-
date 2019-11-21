
import React, { Component } from 'react'
 import { connect } from 'react-redux'
import { increment, decrement } from '../../actions/cart'
 
class CartList extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>商品名称</th>
                        <th>数量</th>
                        <th>价格</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cartList.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={

                                            this.props.decrement.bind(this, item.id)
                                        }>-</button>
                                        <span>{item.amount}</span>
                                        <button onClick={
                                            this.props.increment.bind(this, item.id)

                                        }>+</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        cartList: state
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//         add: (id)=> dispatch(increment(id)),
//         reduce: (id)=>dispatch(decrement(id)),
//     }
// }
//connect 方法有四个参数，常用的就是前面两个，
// 第一个参数是 mapStateToprops ，作用就是从store 里把state注入到当前组件的props 上
// 第二个参数可以是mapDispatchToProps ， 这个的主要作用是把action生成的方法注入到当前组件的props上 
export default connect(mapStateToProps, { increment, decrement })(CartList)