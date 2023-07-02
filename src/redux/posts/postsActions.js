import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE} from './postsTypes';

export const fetchPostsRequest = () => {
      return {
        type: FETCH_POSTS_REQUEST
      }
}

export const fetchPostsSuccess = posts => {
    return {
      type: FETCH_POSTS_SUCCESS,
      payload: posts
    }
}

export const fetchPostsFailure = error => {
    return {
      type: FETCH_POSTS_FAILURE,
      payload: error
    }
}

//by making use of the thunk middleware, fetchPosts will instead return another function
export const fetchPosts = (pathName) => {
//this function receives the dispatch method
    return (dispatch) => {
       dispatch(fetchPostsRequest());
       fetch(`https://www.reddit.com/r/${pathName}/.json?sort=new&limit=20&raw_json=1`)
         .then(response => response.json())
         .then(data => {
            const posts = data;
            console.log('Posts from API:', posts);
            dispatch(fetchPostsSuccess(posts));
         })
         .catch(error => {
            const errorMsg = error.message;
            dispatch(fetchPostsFailure(errorMsg));
         })
    }
    
}