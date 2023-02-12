import React, {useEffect, useState} from 'react';
import {postApi} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/Ipost";

const PostContainer = () => {

    const [limit, setLimit] = useState(20);

    // const {data: posts, error, isLoading, refetch} = postApi.useFetchAllPostsQuery(limit, {
    //     pollingInterval: 1000
    // })

    const {data: posts, error, isLoading, refetch} = postApi.useFetchAllPostsQuery(limit)
    const [createPost, {}] = postApi.useCreatePostMutation()
    const [deletePost, {}] = postApi.useDeletePostMutation()
    const [updatePost, {}] = postApi.useUpdatePostMutation()

    // useEffect(() => {
    //     setTimeout( () => {
    //         setLimit(3)
    //     }, 3000)
    // }, []);

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }
    const handleRemove= (post:IPost) => {
        deletePost(post)
    }
    const handleUpdate= (post:IPost) => {
        updatePost(post)
    }

    
    
    return (
        <div>
            <button onClick={ handleCreate }>Add new post</button>
            <button onClick={ () => refetch()}>REFETCH</button>
            {isLoading && <div>Загрузка...</div>}
            {error && <div>Ошибка!</div>}
            {posts && posts.map(post => <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />)}
        </div>
    );
};

export default PostContainer
