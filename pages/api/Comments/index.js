import { comments } from "../../../data/comments";

export default function handlera(req,res){
    if (req.method ==='GET'){
        res.status(200).json(comments);

    }else if (req.method ==='POST'){
        const comment=req.body.submitc
        const newComment={
            id:Date.now(),
            text:comment,

        }
        comment.push(newComment)
        res.status(201).json(newComment)

    }
    


}