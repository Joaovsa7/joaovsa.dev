import React from "react";
import styled from "styled-components";
import AvatarPath from "../../assets/images/profile-picture.png";

const ProfileWrapper = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  height: 200px;
  width: 200px;
  opacity: 0;
  transition: 0.3s opacity linear;
  z-index: 1;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) -25%,
    rgba(0, 0, 0, 0.9) 16%,
    rgba(255, 255, 255, 0) 53%
  );
  border-radius: 100px;
  position: absolute;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    height: 21px;
    width: 2px;
    bottom: 25px;
    background: white;
    left: 54%;
    transform: rotate(45deg);
  }

  &::before {
    content: "";
    position: absolute;
    height: 21px;
    width: 2px;
    bottom: 25px;
    background: white;
    right: 52%;
    transform: rotate(-45deg);
  }

  &:hover,
  &:active {
    opacity: 1;
    transition: 0.3s opacity linear;
    pointer-events: all;
  }

  &.rotate {
    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }
`;

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

interface Props {
  showBio: Function;
  showingBio: boolean;
}

const Avatar: React.FC<Props> = ({ showBio, showingBio }) => (
  <ProfileWrapper>
    <Overlay
      onClick={() => showBio((prevState) => !prevState)}
      className={showingBio && "rotate"}
    />
    <Profile />
  </ProfileWrapper>
);

export default Avatar;
