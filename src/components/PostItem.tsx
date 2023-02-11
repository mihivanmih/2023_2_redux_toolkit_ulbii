import React, {FC} from 'react';
import {IPost} from "../models/Ipost";

interface PostItemProps {
    post: IPost
}

const PostItem:FC<PostItemProps> = ({post}) => {
    return (
        <div>
            {post.id} <br/>
            {post.title} <br/>
            {post.body} <br/>
            <button>delete</button>
        </div>
    );
};

export default PostItem;

