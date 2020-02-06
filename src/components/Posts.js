import React from 'react'
import {connect} from "react-redux"
import {fetchPosts, deletePost, editPost} from "../actions/postActions"
class Posts extends React.Component {
    constructor(props){
        super(props)
        this.handleEdit = this.handleEdit.bind(this)
    }

    handleEdit(id) {
        this.props.editPost(this.props.posts, id) 
        console.log("done")
    }
    componentDidMount(){
        this.props.fetchPosts()
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newpost){
            this.props.posts.unshift(nextProps.newpost)
        }
    }
    
    render(){
        return (
            <div className="my-5">
                <h3>All Posts</h3>
                <div className="postHold">
                    {
                        this.props.posts.map(post => 
                            <div className="posts" key={post.id}>
                                <p className="bold">{post.title}</p>
                                <p>{post.body}</p>
                                <button onClick={() => this.handleEdit(post.id) } className="form-control btn-success">Edit</button>
                                <button onClick={() => this.props.deletePost(this.props.posts, post.id)} className="form-control btn-danger">Delete</button>
                            </div>    
                        )
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    posts: state.posts.posts,
    newpost: state.posts.newpost
})
export default connect(mapStateToProps, {fetchPosts, deletePost, editPost})(Posts);
