import React from "react";
import Links from "./links";
import Linkscontain from "./links-contain";

export default function Combine({ data, action1, mudale }) {
  return data.map((v, i) => {
    return (
      <React.Fragment key={i}>
        <Linkscontain
          title={v.title}
          action={v.action}
          iconact={v.iconact}
          links={<Links data={v.links} mudale={v.mudale} />}
        />
      </React.Fragment>
    );
  });
}
