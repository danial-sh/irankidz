import React from "react";

export default function DPm({ data }) {
  return <>{data?.map((v, i) => {
    return(
     <div className="newest-dp" onClick={action||''} key={i}>
      <div className="newdp d-flex">
        {v.icon}
      </div>
      <div className="newest-icon-text model">
        <p>{v.text}</p>
      </div>
    </div>)
  })};
  </>
}
