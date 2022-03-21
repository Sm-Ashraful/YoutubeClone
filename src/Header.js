import React, { useState } from "react";
import { Link } from "react-router-dom" 
import "./Header.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import MicIcon from '@mui/icons-material/Mic';


function Header() {
  const [inputSearch, setInputSearch] = useState('');
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <Link to="/">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614"
          alt="Youtube logo"
        />
        </Link>
      </div>

      <div className="header__input">
        <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallOutlinedIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          src="https://lh3.googleusercontent.com/ogw/ADea4I5FvAy2-bdFfdNZ3EeHj_5VnIK9hb45kvS-lYRh2Q=s32-c-mo"
          alt="Me"
        />
      </div>
    </div>
  );
}

export default Header;
