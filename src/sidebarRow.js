import React from "react";
import "./SidebarRow.css";

function sidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className={`sidebarRow__icons`} />
      <h3 className="sidebarRow__title">{title}</h3>
    </div>
  );
}

export default sidebarRow;
