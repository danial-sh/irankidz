import React from "react";
import { AiOutlineClose } from "react-icons/ai";
export default function index({ notifetext }) {
  return (
    <div className="notification d-flex">
      <div className="notif-close ">
        <AiOutlineClose />
      </div>
      {}
      <div className="notifcation-text">
        <h3></h3>
      </div>
    </div>
  );
}
