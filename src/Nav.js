import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="nav__avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Qou3wNk2Qfs7AN49-mULhwGRomERYXuu_fO3qYsTVkrON8-S67AMUwOTlccNYZhYyvU&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
