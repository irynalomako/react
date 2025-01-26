import {useEffect, useState} from "react";
import {getAll} from "../../services/api.servise.ts";
import {IBaseResponse} from "../../models/IBaseResponse.ts";
import {IPost} from "../../models/IPost.ts";
import {PostComponent} from "./PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect( () => {
        getAll<IBaseResponse & { posts: IPost[] }>('/posts')
            .then(({posts}) => {
                setPosts(posts);
            });
    }, []);
    return (
        <div>
            {
                posts.map( (post: IPost) => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    )
}