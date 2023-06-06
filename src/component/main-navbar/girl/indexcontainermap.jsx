import React from "react";
import Contentmap from "./contenmap";
import Indexcontainer from "./indexcontainer";

export default function Indexcontainermap({data,img,myclass}) {
  return (
    <div className={`${myclass} navbar-drop-down d-flex model `}>
    <div className='dp-bars d-flex'>
      {data?.map((v, i) => {
        return (
          <React.Fragment key={i}>
            <Indexcontainer
            bartitle1={v.bartitle1}
            bartitle2={v.bartitle2}
            content={<Contentmap data={v.content}/>}

          />
          </React.Fragment>
        );
      })}
    </div>
    {img&&<div className="dp-image-bar ">
          <img src={`images/${img}`} alt="qw" />
        </div>}
    </div>
  );
}
