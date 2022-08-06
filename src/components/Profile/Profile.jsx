import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
    return  <div className={s.content}>
              <img alt="k" src="https://avatars.mds.yandex.net/get-zen_doc/3957666/pub_5fb385ea268198734de4bb7a_5fb38690268198734de5ece0/scale_1200"/>
              <div>
              ava + discription
              </div>
              <div>
              My posts
              </div>
              <div>
              New Posts
              </div>
              <div>
              Posts 1
              </div>
              <div>
              Posts 2
              </div>
            </div>
}

export default Profile;