import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./postsTypes"

const initialState = {
    loading: false,
    posts: {},
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS_REQUEST:
            console.log("loading")
            return {
                ...state,
                loading: true
            }
        case FETCH_POSTS_SUCCESS:
            console.log("success")
            return {
                loading: false,
                posts: action.payload,
                error: ''
            }
        case FETCH_POSTS_FAILURE:
            console.log("failure")
            return {
                loading: false,
                posts: {},
                error: action.payload
            }

        default: return state;
    }

}

export default reducer;