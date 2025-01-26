import {FC} from "react";
import {IPost} from "../../models/IPost.ts";
type PostComponentProps = {
    post: IPost;
}
export const PostComponent: FC<PostComponentProps> = ({post}) =>{
    return (
        <div>
            <h3> {post.id} {post.title} </h3>
            <div> {post.body} </div>
        </div>
    )
}