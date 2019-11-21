1. 创建reducers 
2. 合并reducers 
3. createStore 
4. Provider store = {store}
5. connect(mapStateToProps,{...actionCreators})(yourComponent)
6. actionCreators
7. 修改reducers

异步actions 需要手动dispatch  

action => dispatch(action) => reducer => store =>view
action =>middleware处理生成新的action => 手动dispatch(action) =>reducer => store =>view
