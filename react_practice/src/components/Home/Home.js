import React from "react";
import "./home.css";
import Title from "../common/Title";
import Card from "../Task/Card_Task/Card";

import { userData } from "../Task/Card_Task/user_data";
export default function Home() {
  const name = "JavaScript";

  return (
    <div className="home-div">
      {/* <Title text={name} /> */}
      {userData.map((user) => {
        return (
          <Card
            username={user.username}
            pic={user.pic}
            projectCount={user.projectCount}
            prototypeCount={user.prototypeCount}
          />
        );
      })}
    </div>
  );
}
