import React , {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import '../styles/RedditPosts.css'
import { useLocation } from "react-router-dom";
import { fetchPosts } from "../redux/posts/postsActions";
import Post from "./Post";

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
    <img src = {process.env.PUBLIC_URL + '/images/loading.png'} alt = "Loading.."/>
) : error ? (
    <h2>{error}</h2>
) : (
    <div className = "RedditPosts">
        {posts.data?.children.map((post) => (
            <Post post={post.data} key={post.data.author_fullname}/>
        ))}
    </div>
)

}


export default RedditPosts