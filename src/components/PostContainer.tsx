import React, {useEffect, useState} from 'react';
import {postApi} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {

    const [limit, setLimit] = useState(10);

    // const {data: posts, error, isLoading, refetch} = postApi.useFetchAllPostsQuery(limit, {
    //     pollingInterval: 1000
    // })

    const {data: posts, error, isLoading, refetch} = postApi.useFetchAllPostsQuery(limit)

    useEffect(() => {
        setTimeout( () => {
            setLimit(3)
        }, 3000)
    }, []);
    
    
    return (
        <div>
            <button onClick={ () => refetch()}>REFETCH</button>
            {isLoading && <div>Загрузка...</div>}
            {error && <div>Ошибка!</div>}
            {posts && posts.map(post => <PostItem key={post.id} post={post} />)}
        </div>
    );
};

export default PostContainer
