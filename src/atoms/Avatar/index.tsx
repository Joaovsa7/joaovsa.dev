import React from "react";
import styled from "styled-components";
import AvatarPath from "../../assets/images/profile-picture.png";

const Profile = styled.div`
  height: 200px;
  width: 200px;
  background-image: url(./${AvatarPath});
  background-size: cover;
  border-radius: 100px;
  background-position: 80%;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
`;

const Avatar: React.FC = () => <Profile />;

export default Avatar;
