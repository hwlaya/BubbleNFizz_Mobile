import React from "react";
import ProfileUserInfo from "./ProfileUserInfo";

const TemporaryProfilePage = () => {
  const temporaryName = "John Doe";
  const temporaryPicture = require("./john_doe_profile_pic.jpg");

  return <ProfileUserInfo name={temporaryName} picture={temporaryPicture} />;
};

export default TemporaryProfilePage;
