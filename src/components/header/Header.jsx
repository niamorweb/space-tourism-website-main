import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <header>
      <nav>
        <img className="logo" src="assets/images/shared/logo.svg" alt="" />
        <ul className="tablet nav-big-screen">
          <NavLink activeClassName="active" to="/space-tourism-website-main/">
            <li className="subheading-second"> home</li>
          </NavLink>
          <NavLink activeClassName="active" to="/space-tourism-website-main/destination">
            <li className="subheading-second">destination</li>
          </NavLink>
          <NavLink activeClassName="active" to="/space-tourism-website-main/crew">
            <li className="subheading-second">crew</li>
          </NavLink>
          <NavLink activeClassName="active" to="/space-tourism-website-main/technology">
            <li className="subheading-second">technology</li>
          </NavLink>
        </ul>

        {showMobileNav ? (
          <img
            className="mobile"
            onClick={() => handleMobileNav()}
            id="close-menu-mobile"
            src="assets/icons/icon-close-white.svg"
            alt=""
          />
        ) : (
          <img
            className="mobile"
            onClick={() => handleMobileNav()}
            id="open-menu-mobile"
            src="assets/icons/icon-hamburger-white.svg"
            alt=""
          />
        )}

        {showMobileNav ? (
          <div className="menu-mobile mobile">
            <ul>
              <NavLink to="/">
                <li className="subheading-second"> home</li>
              </NavLink>
              <NavLink to="/destination">
                <li className="subheading-second">destination</li>
              </NavLink>
              <NavLink to="/crew">
                <li className="subheading-second">crew</li>
              </NavLink>
              <NavLink to="/technology">
                <li className="subheading-second">technology</li>
              </NavLink>
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
