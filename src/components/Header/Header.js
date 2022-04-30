import React from "react";
import { ReactComponent as HeaderLogo } from "../../data/images/header-logo.svg";

export default function Header() {
  return (
    <div className="container header-wrapper">
      <div className="header-logo">
      <HeaderLogo />
      </div>
      <nav className="header-nav">
        <button className="btn">Users</button>
        <button className="btn">Sign up</button>
      </nav>
    </div>
  );
}
