import React from "react";
import Post from "../Post/Posts";
import style from "./MyPosts.module.css";

let posts = [ 
    {id: 1, message: 'Hi, how are you&', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
];

let postsElement = posts.map( p => <Post message={p.message} likeCount={p.likesCount} /> )

const MY_POSTS = (props) => {
    return (
        <div className={style.wrapper}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Posts</button>
                </div>
            </div>

            <div>
                { postsElement }
            </div>
        </div>
    )
};

export default MY_POSTS;