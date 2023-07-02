import React , {useEffect} from "react";
import {useSelector, useDispatch, connect} from 'react-redux';
import '../styles/Post.css'

function Post(props) {

    const title = props.post?.title;
    const author = props.post?.author;
    const image = props.post?.thumbnail;
    const text = props.post?.selftext;
    const likes = props.post?.ups;
    const dislikes = props.post?.downs;
    const nrComments = props.post?.num_comments;
    const created_utc = props.post?.created_utc;
    const postDate = new Date(created_utc * 1000);

    const encodeImg = img => {
        const i = img.includes("external-preview");
       if (i==true) {
        const encodedURL = encodeURI(img);
        return encodedURL;
       }
       else {
        return img;
       }
    }
    
    return (
       <div className = 'redditPost'>
            <h3 className="title">{title}</h3>
            <h5 className="createdDate">{postDate.getFullYear() + '-' + postDate.getMonth() + '-' + postDate.getDate() + ' ' + postDate.getHours( ) + ':' + postDate.getMinutes()}</h5>
            {text && <p className="text">{text}</p>}
            {image.length >10 && <img src={encodeImg(image)} alt='Reddit Post Image' className="redditImg"/>}
            <div className="author-reacts">
            <h5 className="author">{author}</h5>
            <div className="reacts">
            <img src = {process.env.PUBLIC_URL + '/images/like.png'} alt = "Like" className="reactButtons"/>
            <p className="nrReact">{likes}</p>
            <img src = {process.env.PUBLIC_URL + '/images/dislikes.png'} alt = "Dislike" className="reactButtons"/>
            <p className="nrReact">{dislikes}</p>
            <img src = {process.env.PUBLIC_URL + '/images/chat-balloon.png'} alt = "Comments" className="reactButtons"/>
            <p className="nrReact">{nrComments}</p>
            </div>
            </div>
       </div>
    )

}

export default Post;