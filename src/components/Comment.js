import React from "react";
import '../styles/Comment.css'

function Comment(props) {
   return (
    <div className="comment">
      <div className="comment-data">
         <h6 className="comment-author">{props.post.comment_author}</h6>
         <h6 className="comment-createdDate">{props.post.comment_created.getFullYear() + '-' + props.post.comment_created.getMonth() + '-' + props.post.comment_created.getDate() + ' ' + props.post.comment_created.getHours( ) + ':' + props.post.comment_created.getMinutes()}</h6>
      </div>
      <p className="comment-text">{props.post.comment_text}</p>
    </div>
   )
}

export default Comment;