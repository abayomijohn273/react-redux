import {FETCH_POSTS, ADD_POST, UPDATE_POST, DELETE_POST} from "../constants/actionType"
import postDatas from "../data"
export const fetchPosts = () => (dispatch) => {
    console.log("working...dispatch")
    dispatch({
        type: FETCH_POSTS,
        payload: postDatas
    })
}
export const addPost = (data) => (dispatch) => {
    console.log("add data")
    dispatch({
        type: ADD_POST,
        payload: data
    })
}

export const deletePost = (postData, id) => (dispatch) => {
    console.log("delete data")
    dispatch({
        type: DELETE_POST,
        payload: postData.filter(post => post.id !== id)
    })
}

export const editPost = (postData, id) => (dispatch) => {
    // console.log("update data" + JSON.stringify(data.filter(post => post.id === id)))
    let filteredItem = postData.filter(post => post.id !== id)
    let filteredItemData = postData.find(item => item.id === id)
    console.log(postData.find(item => item.id === id))
    dispatch({
        type: UPDATE_POST,
        payload: {
            posts: filteredItem,
            newpost: filteredItemData,
            editPost: true
        }
    })
}
