import React from 'react';
import {postApi} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer2 = () => {

    const {data: posts, error, isLoading} = postApi.useFetchAllPostsQuery(10)

    return (
        <div>
            {isLoading && <div>Загрузка...</div>}
            {error && <div>Ошибка!</div>}
            {/*{posts && posts.map(post => <PostItem key={post.id} post={post} />)}*/}
        </div>
    );
};

export default PostContainer2
