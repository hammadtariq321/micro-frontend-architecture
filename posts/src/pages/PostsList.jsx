import React from 'react'
import { useFetchPostsQuery } from 'store/query';
import PostsCard from '../components/PostsCard';

const PostsList = () => {
    const { data: postsData, error, isLoading } = useFetchPostsQuery();
    console.log("postsData", postsData)
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-5">Post List</h1>
            {postsData && postsData.map((post) =>
                (< PostsCard data={post} />)
            )}
        </div>
    )
}

export default PostsList