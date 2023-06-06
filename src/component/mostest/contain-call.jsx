import React from "react";
import Combine from "../main-latestproduct/combine";
import Contains from "./contains";

export default function Containcall({ data, handleAction, productbuylist }) {
  return data.map((value, ind) => {
    return (
      <React.Fragment key={ind}>
        <Contains
          title={value.title}
          contain={
            <Combine
              data={value.contain}
              handleAction={(item, index, v, i, value, ind) =>
                handleAction(item, index, v, i, value, ind)
              }
              productbuylist={(event, v, i) =>
                productbuylist(event, v, i, value, ind)
              }
            />
          }
        />
      </React.Fragment>
    );
  });
}
