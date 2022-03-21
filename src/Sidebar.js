import React from "react";
import "./sidebars.css";
import SidebarRow from "./sidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* <h1>I am a Sidebar</h1> */}

      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trading" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />

      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Latter" />
      <SidebarRow Icon={ThumbUpIcon} title="Liked Video" />
      <SidebarRow Icon={ExpandMoreIcon} title="See More" />
      <hr />
    </div>
  );
}

export default Sidebar;
