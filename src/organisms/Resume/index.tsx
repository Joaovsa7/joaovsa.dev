import React from "react";
import Avatar from "../../atoms/Avatar";
import SocialNetworks from "../../molecules/SocialNetworks";
import Logo from "../../atoms/Logo";
import { ResumeWrapper, JobTitle } from "./style";

const Resume: React.FC = () => (
  <ResumeWrapper>
    <Avatar />
    <Logo />
    <JobTitle>Desenvolvedor de Software.</JobTitle>
    <SocialNetworks />
  </ResumeWrapper>
);

export default Resume;
