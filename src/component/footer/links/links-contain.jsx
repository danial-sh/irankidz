import React from "react";
import { BiCaretDown } from "react-icons/bi";
export default function Linkscontain(props) {
  return (
    <div className="links">
      <div className="d-flex links-title-contain" onClick={props.action}>
        <h3 className="links-title">{props.title}</h3>
        <div className="links-title-icon d-flex">
          <BiCaretDown
            className={props.iconact ? "icon-link-true" : "icon-link-false"}
          />
        </div>
      </div>
      {props.links}
    </div>
  );
}
