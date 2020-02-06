import { FETCH_POSTS, ADD_POST, DELETE_POST, UPDATE_POST } from "../constants/actionType"

const initialState = {
    posts: [],
    newpost: {},
    editPost : false
}
const postReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_POSTS : 
        console.log("working...Reducer")
            return ({
                ...state,
                posts: action.payload
            })
            break;
        case ADD_POST:
            return({
                ...state,
                newpost: action.payload
            })
        case DELETE_POST:
            return({
                ...state,
                posts: action.payload
            })
        case UPDATE_POST:
            console.log("update data")
            return(action.payload)
            break;
        default:
            return state
    }
}
export default postReducer