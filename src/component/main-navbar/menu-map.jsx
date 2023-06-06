import React from "react";
import Indexcontainermap from "./girl/indexcontainermap";
import Menuitems from "./menu-items";

export default function Menumap({ data }) {
  return (
    <div className="navbar-container d-flex">
      {data?.map((v, i) => {
        return (
          <React.Fragment key={i}>
            <Menuitems
              title={v.title}
              text={v.text}
              dropdown={
                <Indexcontainermap
                  data={v.dropdown}
                  img={v.img}
                  myclass={v.myclass}
                />
              }
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}
