import React from 'react';

const Posts = ({posts,loading}) => {
    if(loading){

        return <h2>Loading..</h2>


    }
    return <ul className='listgroup'>
        { posts.map(post =>(

            <li key={post.name} className="list-group-item">

                {post.name}
            </li>
        ))


        }

    </ul>
};

export default Posts;