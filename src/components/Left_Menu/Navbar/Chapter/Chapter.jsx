import React from "react";
import s from './Chapter.module.css';
import { NavLink } from "react-router-dom";

const Chapter = (props) => {
  return (
    <div>
        <NavLink to="/news-feed" className={navData => navData.isActive ? `${s.active} ${s.news}` : `${s.news} ${s.item}`}>
          <div className={s.svg}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.625 2.625H3.375C2.96016 2.625 2.625 2.96016 2.625 3.375V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V3.375C21.375 2.96016 21.0398 2.625 20.625 2.625ZM19.6875 19.6875H4.3125V4.3125H19.6875V19.6875Z" fill="#1890FF" />
              <path d="M4.3125 19.6875H19.6875V4.3125H4.3125V19.6875ZM11.3438 8.0625C11.3438 7.95937 11.4281 7.875 11.5312 7.875H15.8438C15.9469 7.875 16.0312 7.95937 16.0312 8.0625V9.1875C16.0312 9.29063 15.9469 9.375 15.8438 9.375H11.5312C11.4281 9.375 11.3438 9.29063 11.3438 9.1875V8.0625ZM11.3438 11.4375C11.3438 11.3344 11.4281 11.25 11.5312 11.25H15.8438C15.9469 11.25 16.0312 11.3344 16.0312 11.4375V12.5625C16.0312 12.6656 15.9469 12.75 15.8438 12.75H11.5312C11.4281 12.75 11.3438 12.6656 11.3438 12.5625V11.4375ZM11.3438 14.8125C11.3438 14.7094 11.4281 14.625 11.5312 14.625H15.8438C15.9469 14.625 16.0312 14.7094 16.0312 14.8125V15.9375C16.0312 16.0406 15.9469 16.125 15.8438 16.125H11.5312C11.4281 16.125 11.3438 16.0406 11.3438 15.9375V14.8125ZM8.90625 7.6875C9.42422 7.6875 9.84375 8.10703 9.84375 8.625C9.84375 9.14297 9.42422 9.5625 8.90625 9.5625C8.38828 9.5625 7.96875 9.14297 7.96875 8.625C7.96875 8.10703 8.38828 7.6875 8.90625 7.6875ZM8.90625 11.0625C9.42422 11.0625 9.84375 11.482 9.84375 12C9.84375 12.518 9.42422 12.9375 8.90625 12.9375C8.38828 12.9375 7.96875 12.518 7.96875 12C7.96875 11.482 8.38828 11.0625 8.90625 11.0625ZM8.90625 14.4375C9.42422 14.4375 9.84375 14.857 9.84375 15.375C9.84375 15.893 9.42422 16.3125 8.90625 16.3125C8.38828 16.3125 7.96875 15.893 7.96875 15.375C7.96875 14.857 8.38828 14.4375 8.90625 14.4375Z" fill="#E6F7FF" />
              <path d="M7.96875 15.375C7.96875 15.6236 8.06752 15.8621 8.24334 16.0379C8.41915 16.2137 8.65761 16.3125 8.90625 16.3125C9.15489 16.3125 9.39335 16.2137 9.56916 16.0379C9.74498 15.8621 9.84375 15.6236 9.84375 15.375C9.84375 15.1264 9.74498 14.8879 9.56916 14.7121C9.39335 14.5363 9.15489 14.4375 8.90625 14.4375C8.65761 14.4375 8.41915 14.5363 8.24334 14.7121C8.06752 14.8879 7.96875 15.1264 7.96875 15.375V15.375ZM7.96875 12C7.96875 12.2486 8.06752 12.4871 8.24334 12.6629C8.41915 12.8387 8.65761 12.9375 8.90625 12.9375C9.15489 12.9375 9.39335 12.8387 9.56916 12.6629C9.74498 12.4871 9.84375 12.2486 9.84375 12C9.84375 11.7514 9.74498 11.5129 9.56916 11.3371C9.39335 11.1613 9.15489 11.0625 8.90625 11.0625C8.65761 11.0625 8.41915 11.1613 8.24334 11.3371C8.06752 11.5129 7.96875 11.7514 7.96875 12ZM7.96875 8.625C7.96875 8.87364 8.06752 9.1121 8.24334 9.28791C8.41915 9.46373 8.65761 9.5625 8.90625 9.5625C9.15489 9.5625 9.39335 9.46373 9.56916 9.28791C9.74498 9.1121 9.84375 8.87364 9.84375 8.625C9.84375 8.37636 9.74498 8.1379 9.56916 7.96209C9.39335 7.78627 9.15489 7.6875 8.90625 7.6875C8.65761 7.6875 8.41915 7.78627 8.24334 7.96209C8.06752 8.1379 7.96875 8.37636 7.96875 8.625V8.625ZM11.5312 16.125H15.8438C15.9469 16.125 16.0312 16.0406 16.0312 15.9375V14.8125C16.0312 14.7094 15.9469 14.625 15.8438 14.625H11.5312C11.4281 14.625 11.3438 14.7094 11.3438 14.8125V15.9375C11.3438 16.0406 11.4281 16.125 11.5312 16.125ZM11.5312 12.75H15.8438C15.9469 12.75 16.0312 12.6656 16.0312 12.5625V11.4375C16.0312 11.3344 15.9469 11.25 15.8438 11.25H11.5312C11.4281 11.25 11.3438 11.3344 11.3438 11.4375V12.5625C11.3438 12.6656 11.4281 12.75 11.5312 12.75ZM11.5312 9.375H15.8438C15.9469 9.375 16.0312 9.29063 16.0312 9.1875V8.0625C16.0312 7.95937 15.9469 7.875 15.8438 7.875H11.5312C11.4281 7.875 11.3438 7.95937 11.3438 8.0625V9.1875C11.3438 9.29063 11.4281 9.375 11.5312 9.375Z" fill="#1890FF" />
            </svg>
          </div>
          <span className={s.text}>{props.text}</span>
        </NavLink>
      </div>
  )
}

export default Chapter;