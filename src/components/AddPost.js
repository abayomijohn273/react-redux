import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"
import {addPost} from "../actions/postActions"
const AddPost = (props) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleChange2 = (e) => {
        setBody(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const addData = {
            id: props.posts.length + 1,
            title: title,
            body: body
        }
        console.log(addData)
        if(addData.title==="" && addData.body === ""){
            return
        } else {
            props.addPost(addData)
        }
        
        setTitle("")
        setBody("")
        document.getElementsByName("title")[0].focus()
    }
    useEffect(() => {
        console.log(props.newpost)
        if(props.newpost.title ==="" && props.newpost.body === ""){
            setTitle("")
            setBody("")
        } else {
            setTitle(props.newpost.title)
            setBody(props.newpost.body)
        }
        
    }, [props.newpost])
    return (
        <div className="col-md-6 offset-md-3">
            <h1>ADD POST</h1>
            <form onSubmit={handleSubmit} className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" className="form-control" onChange={handleChange} value={title} />

                <label htmlFor="title">Body:</label>
                <input type="text" name="body" className="form-control" onChange={handleChange2} value={body} />
                {/* <button type="submit">Post Now</button> */}

                <button type="submit" className={`form-control mt-3 ${props.editPost ? "btn-success" : "btn-primary"}`}>{props.editPost ? "Update Post" : "Post Now"}</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => ({
    posts: state.posts.posts,
    newpost: state.posts.newpost,
    editPost: state.posts.editPost
})
export default connect(mapStateToProps, {addPost})(AddPost);
