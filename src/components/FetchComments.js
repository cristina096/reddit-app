const commentsURL = 'https://www.reddit.com';

const fetchComments = (permalink) => {
    return fetch(`${commentsURL}${permalink}.json?limit=3`).then(response =>{ return response.json()} )
     .then(jsonResponse => {
        if(!jsonResponse) {
            return []
        }
        return jsonResponse[1].data.children.map(comment=> ({
            comment_text: comment.data.body,
            comment_author: comment.data.author,
            comment_created: new Date(comment.data.created_utc * 1000),
            comment_id: comment.data.id
        }))
     })
}


export default fetchComments;