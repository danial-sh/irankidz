import React from "react";
import Index1content from "./index-content";

export default function Contentmap({ data }) {
  return data.map((v, i) => {
    return (
      <React.Fragment key={i}>
        <Index1content
          baritemtitle={v.baritemtitle}
          baritemtext={v.baritemtext}
        />
      </React.Fragment>
    );
  });
}
