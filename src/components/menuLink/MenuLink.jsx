import React from "react";
import { useSelector } from "react-redux";
import "./menulink.css";

export default function MenuLink({ icon, text }) {
  const name = useSelector(state=>state.user.userInfo.name)
  return (
    <div className="menulink">
      {icon}
      <span className="menuLinkText">{text === "Logout" ? ("Logout (" + name + ")" ) : text}</span>
      {/* <span className="menuLinkTextName">
        {text === "Logout" && "( John )"}
      </span> */}
    </div>
  );
}
