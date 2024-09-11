import React from 'react'
import { useNavigate } from "react-router-dom";
const PostsCard = ({ data }) => {
    const navigate = useNavigate();
    return (
        <div key={data?.id} className='border shadow p-5 m-5 cursor-pointer' onClick={() => navigate(data?.title)}>
            <h1 className='font-bold'>{data?.title}</h1>
            <p>{data?.body}</p>
        </div>
    )
}

export default PostsCard