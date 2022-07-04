import React from 'react'
import './rightbar.css'

export default function Rightbar() {
  return (
    <div className='rightBar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b> Pola Foster </b>and <b> 3 other friends</b> have a birthday today</span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarfrindList">
              <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className='rightbarUsername'>John Carter</span>
              </li>
              <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className='rightbarUsername'>lavrage Carter</span>
              </li>
              <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className='rightbarUsername'>dhrupad Carter</span>
              </li>
        </ul>
      </div>
    </div>
  )
}
