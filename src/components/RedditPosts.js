import React , {useEffect} from "react";
import {useSelector, useDispatch, connect} from 'react-redux';
import { useLocation } from "react-router-dom";
import { fetchPosts } from "../redux/posts/postsActions";

function RedditPosts() {

const posts = useSelector(state => state.posts);
const loading = useSelector(state => state.loading);
const error = useSelector(state => state.error);
const dispatch = useDispatch();
const location = useLocation();
const pathName = location.pathname.substring(1);


useEffect( () => {
    dispatch(fetchPosts(pathName));
}, [dispatch, pathName])

return loading ? ( 
    <h2>Loading...</h2>
) : error ? (
    <h2>{error}</h2>
) : (
    <div>
        {posts.kind}
    </div>
)

}


export default RedditPosts