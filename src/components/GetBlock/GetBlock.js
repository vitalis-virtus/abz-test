import React from "react";

import UserCard from "../UserCard/";

export default function GetBlock() {
  return (
    <div className="getBlock-bg">
      <div className="container">
        <div className="getBlock-wrapper"></div>
        <h2 className="getBlock-header">Working with GET request</h2>
        <ul className="getBlock-list">
          <li key="test" className="getBlock-list-item">
            <UserCard />
          </li>
          <li key="test" className="getBlock-list-item">
            <UserCard />
          </li>
          <li key="test" className="getBlock-list-item">
            <UserCard />
          </li>
          <li key="test" className="getBlock-list-item">
            <UserCard />
          </li>
          <li key="test" className="getBlock-list-item">
            <UserCard />
          </li>
          <li key="test" className="getBlock-list-item">
            <UserCard />
          </li>
        </ul>
        <button className="btn getBlock-btn">Show more</button>
      </div>
    </div>
  );
}
