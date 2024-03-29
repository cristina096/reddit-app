import React , {useState} from "react";
import '../styles/Post.css'
import fetchComments from "./FetchComments";
import Comment from './Comment';

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
    const permalink = props.post?.permalink;

    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false); // State for toggling comments visibility

   const fetchAndShowComments = (permalink) => {
       fetchComments(permalink).then(comments => {
           setComments(comments);
           setShowComments(true); // Set the state to true to show comments when fetched
       });
   }

   const toggleComments = () => {
       if (showComments) {
           setComments([]); // Clear comments when hiding the section
       } else {
           fetchAndShowComments(permalink);
       }
   };


    return (
       <div className = 'redditPost'>
            <h3 className="title">{title}</h3>
            <h5 className="createdDate">{postDate.getFullYear() + '-' + (postDate.getMonth()+1) + '-' + postDate.getDate() + ' ' + postDate.getHours() + ':' + postDate.getMinutes()}</h5>
            {text && <p className="text">{text}</p>}
            {image.length >10 && <img src={image} alt='Reddit Post' className="redditImg"/>}

            <div className="author-reacts">
                 <h5 className="author">{author}</h5>
                <div className="reacts">
                    <img src = {process.env.PUBLIC_URL + '/images/like.png'} alt = "Like" className="reactButtons"/>
                    <p className="nrReact">{likes}</p>
                    <img src = {process.env.PUBLIC_URL + '/images/dislikes.png'} alt = "Dislike" className="reactButtons"/>
                    <p className="nrReact">{dislikes}</p>
                    <button className="comments" onClick={toggleComments}>
                    <img src = {process.env.PUBLIC_URL + '/images/chat-balloon.png'} alt = "Comments" className="reactButtons"/>
                    </button>
                    <p className="nrReact">{nrComments}</p>
                </div>
            </div>

            {showComments && comments.length > 0 && (
            <div className = "comments-section">
               {comments.slice(0,-1).map((comment) => (
                  <Comment post={comment} key={comment.comment_id}/>
               ))}
            </div> )}
               
            
       </div>
    )

}

export default Post;