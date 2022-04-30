import React from "react";

import imgPath from "../../data/images/pexels-alexandr-podvalny-1227513.jpeg";

export default function UserCard() {
  return (
    <div className="userCard-wrapper">
      <img className="userCard-img" alt="userImage" src={imgPath} />
      <span className="userCard-name">
        Salvador Stewart Flynn Thomas Salva
      </span>
      <p className="userCard-bio">
        Frontend Developer Frontend frontend_develop@gmail.com +38 (098) 278
        44 24
      </p>
    </div>
  );
}
