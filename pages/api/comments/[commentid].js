import { comments } from "../../../data/comments"

export default function handler(req, res) {
    const { commentid } = req.query;

    if (req.method === 'GET') {
        const comment = comments.find(comment => comment.id === parseInt(commentid));
        res.status(200).json(comment);
    } else if (req.method === 'DELETE') {
        const deleteComment = comments.find(comment => comment.id === parseInt(commentid));
        res.status(200).json(deleteComment);


        //both you can use it like this:
        // const index = comments.indexOf(deleteComment);
        const index = comments.findIndex(comment => comment.id === parseInt(commentid));
        comments.splice(index, 1);
        res.status(200).json(deleteComment);
    }
}

