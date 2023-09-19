import React, { useState } from "react";
import ben from "./ben.jpg";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const App = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleButtonHover = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleButtonLeave = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <div className="popover">
      <div className="container">
        <div>
          <h2>LOGO</h2>
        </div>
        <div className="container-left">
          <ul>
            <button onClick={handleButtonHover} className="material-symbols-outlined">apps</button>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className={isMenuVisible ? "menu visible" : "menu"}>
        <button className="account">
          <img src={ben} alt="" />
          <span>Account</span>
        </button>
        <div className="icon">
          <ul>
            <div className="icon-ul">
              <FcGoogle />
              <AiFillGithub />
              <AiFillLinkedin />
            </div>
            <div className="icon-ul">
              <FcGoogle />
              <AiFillGithub />
              <AiFillLinkedin />
            </div>
            <div className="icon-ul">
              <FcGoogle />
              <AiFillGithub />
              <AiFillLinkedin />
            </div>
            <div className="icon-ul">
              <FcGoogle />
              <AiFillGithub />
              <AiFillLinkedin />
            </div>
            <div className="icon-ul">
              <FcGoogle />
              <AiFillGithub />
              <AiFillLinkedin />
            </div>
            <div className="icon-ul">
              <FcGoogle />
              <AiFillGithub />
              <AiFillLinkedin />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
