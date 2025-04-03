import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const params = useParams();
  return (
    <div>
      <h1>Welcome</h1>
      <h2>{params.username}</h2>
    </div>
  );
};
export default Profile;

