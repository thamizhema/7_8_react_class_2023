import React from "react";
import "./card.css";
import img1 from "./images/image1.webp";
export default function Card(props) {
  return (
    <div className="card-div">
      <span></span>
      <span className="popup-menu">...</span>
      <div className="profile">
        <div className="profile-img">
          <img src={props.pic} alt="img" />
        </div>
        <div className="profile-name">{props.username}</div>
      </div>
      <div className="status">
        <StatusCount subtitle="Projects" count={props.projectCount} />
        <StatusCount subtitle="Prototypes" count={props.prototypeCount} />
      </div>
    </div>
  );
}

function StatusCount(props) {
  return (
    <div className="status-div">
      <div class="count">{props.count}</div>
      <div class="subtitle">{props.subtitle}</div>
    </div>
  );
}
