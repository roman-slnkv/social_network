import React from "react";
import style from "./Post.module.css";

const POST = (props) => {
    return (
        <div className={style.post}>
            <div className={style.posts}>

                <img className="mr-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" alt="" />
                <span>{props.message}</span>

            </div>

            <div>

                <span>Like {props.likeCount}</span>

            </div>
        </div>
    )
};

export default POST;