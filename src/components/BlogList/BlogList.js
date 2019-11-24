import React, { Component } from 'react'
import { connect } from 'react-redux'
import BlogItem from './BlogItem'
import {fetchBlogList} from '../../actions/blog'
class BlogList extends Component {
   
   componentDidMount(){
      this.props.fetchBlogList()
   }
   
   
   
    render() {
        console.log(this.props)
        const{
            list,
            isLoading,
            errMsg
        } =this.props 
      const hasError = Boolean(errMsg)
        return (
            isLoading
            ?
            <div>loadig...</div>  
            :
            (
                hasError
                ?
                <div>{errMsg}</div>
                :
                 <ul>
            {
                list.map(blog => {
                    return (
                        <BlogItem key={blog.id} {...blog} />
                    ) 
                })
            }
        </ul> 
            )
           
        )
    }
}
const mapState = state => ({
    list: state.blog.list,
    isLoading: state.blog.isLoading,
    errMsg:state.blog.errMsg
})

export default connect(mapState,{fetchBlogList})(BlogList)