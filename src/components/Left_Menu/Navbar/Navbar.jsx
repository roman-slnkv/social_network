import React from "react";
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import Svg from "./Chapter/Svg";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/news-feed" className={navData => navData.isActive ? `${s.active} ${s.news}` : `${s.news} ${s.item}`}>
          <div className={s.svg}>
            <Svg id="news_feed"/>
          </div>
          <span className={s.text}>News Feed</span>
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/profile" className={navData => navData.isActive ? `${s.active} ${s.news}` : `${s.news} ${s.item}`}>
          <div className={s.svg}>
            <Svg id="profile"/>
          </div>
          <span className={s.text}>Profile</span>
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/dialogs" className={navData => navData.isActive ? `${s.active} ${s.news}` : `${s.news} ${s.item}`}>
          <div className={s.svg}>
            <Svg id="message"/>
          </div>
          <span className={s.text}>Message</span>
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/music" className={navData => navData.isActive ? `${s.active} ${s.news}` : `${s.news} ${s.item}`}>
          <div className={s.svg}>
            <Svg id="music"/>
          </div>
          <span className={s.text}>Music</span>
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/settings" className={navData => navData.isActive ? `${s.active} ${s.news}` : `${s.news} ${s.item}`}>
          <div className={s.svg}>
            <Svg id="settings"/>
          </div>
          <span className={s.text}>Settings</span>
        </NavLink>
      </div>

    </nav>
  )
}

export default Navbar;