import React from 'react'

export default function Indexcontainer({bartitle1,bartitle2,content}) {
  // const classhandler=()=>{
  //   if(tt=''){
  //     let x=""
  //   }
  //   return x
  // }
  return (
    <div className="dp-content-bar">
    <div className="dp-title dp-model">
      {(bartitle1||bartitle2)&&<p title={bartitle1}>{bartitle2}</p>}
    </div>
    {content}
  </div>
  )
}
