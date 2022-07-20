import { useState } from 'react';


function CommentsPage() {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");


    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data);
    }

    const submitComments = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);

    }

    const deleteComment = async (commentId) => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);
        fetchComments();
    }

    return (
        <div>
            <div>
                <h3>Post Request</h3>
                <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
                <button onClick={submitComments}>Submit Comments</button>
            </div>

            <button onClick={fetchComments}>Load comments</button>
            {comments.length <= 0 ? "no comments found" : comments.map(comment => {
                return (
                    <div key={comment.id}>
                        {comment.id} {comment.text} &nbsp; &nbsp;
                        <button onClick={() => deleteComment(comment.id)}>delete</button>
                    </div>
                )
            })}
        </div>
    )
}
export default CommentsPage