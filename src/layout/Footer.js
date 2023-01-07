import React from 'react'
import messageIcon from "../assests/messages_icon.png";
import homeIcon from "../assests/home_icon.png";
import mapIcon from "../assests/map_icon.png";
import userIcon from "../assests/user_30.png";
import settingsIcon from "../assests/settings_icon.png";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className={`${props.className} absolute inset-x-0 bottom-0 w-fill border-t-2 border-black p-4`}>
    <ul className="flex justify-between">
      <li>
        <Link to="/">
          <img src={homeIcon} alt="home" />
        </Link>
      </li>
      <li>
        <Link to="/map">
          <img src={mapIcon} alt="map" />
        </Link>
      </li>
      <li>
        <Link to="/profile">
          <img src={userIcon} alt="user" />
        </Link>
      </li>
      <li>
        <Link >
          <img src={messageIcon} alt="message" />
        </Link>
      </li>
      <li>
        <Link >
          <img src={settingsIcon} alt="settings" />
        </Link>
      </li>
    </ul>
  </footer>
  )
}

export default Footer
