import React from "react";
import Post from "../Post/Posts";
import style from "./MyPosts.module.css";

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
                <Post message='Hi, how are you?' likeCount='0' />
                <Post message='Its my first post' likeCount='23' />
            </div>
        </div>
    )
};

export default MY_POSTS;