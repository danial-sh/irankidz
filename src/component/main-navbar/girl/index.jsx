import React from 'react'

export default function Girl(props) {
  return (
    <div className="navbar-drop-down d-flex model">
        <div className="dp-bars d-flex">
          <div className="dp-content-bar">
            <div className="dp-title dp-model">
              <p title='پوشاک '>پوشاک </p>
            </div>
            <div className="dp-text">
              <p className='model' title='بلوز وشلوار '>بلوز وشلوار </p>
              <p className='model' title='پولیور '>پولیور </p>
              <p className='model' title='سرهمی '>سرهمی </p>
              <p className='model' title='پیراهن '>پیراهن </p>
            </div>
          </div>
        </div>   
        <div className="dp-image-bar">
          <img src="images/girl.webp" alt="qw" />
        </div>
      </div> 
  )
}
