import React from "react";


export default function DPm({ data, handleAction }) {
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className="newest-dp"
           onClick={item.text=="مشاهده سریع" ?() => handleAction(item, index):null}
          >
            <div className="newdp d-flex">{item.icon}</div>
            <div className="newest-icon-text model">
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
  //  data?.map((v, i) => {
  //   return (
  //     <React.Fragment key={i}>
  //       <Dp icon={v.icon} text={v.text}/>
  //     </React.Fragment>
  //   );
  // });
}
