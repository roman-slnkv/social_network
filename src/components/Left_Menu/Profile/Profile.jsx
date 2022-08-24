import React from "react";
import MY_POSTS from "./MyPost/MyPosts";
import ProfileInfo from "./Profile_Info/Profile_Info.jsx"

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MY_POSTS />
    </div>

  )
}

export default Profile;