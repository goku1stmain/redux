import React from "react";
import { useSelector } from "react-redux";

// to show redux content into our
function Profile() {
  const user = useSelector((state) => state.user.value);
  const color = useSelector((state) => state.theme.value);
  console.log(color, "ssss");
  return (
    <div style={{ color: color }}>
      <h1>profile</h1>
      <p>Name:{user.name}</p>
      <p>age:{user.age}</p>
      <p>email:{user.email}</p>
      <p>color:{color}</p>
    </div>
  );
}

export default Profile;
