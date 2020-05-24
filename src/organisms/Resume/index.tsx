import React, { useState } from "react";
import Avatar from "../../atoms/Avatar";
import SocialNetworks from "../../molecules/SocialNetworks";
import Logo from "../../atoms/Logo";
import { ResumeWrapper, JobTitle, AboutMeContainer } from "./style";

const Resume: React.FC = () => {
  const [showBio, setShowBio] = useState(false);
  const YEAR_OF_BORN = 2001;
  const currentYear = new Date().getFullYear();
  const myAge = currentYear - YEAR_OF_BORN;
  return (
    <ResumeWrapper className={showBio && "open"}>
      <Avatar showBio={setShowBio} showingBio={showBio} />
      <Logo />
      <JobTitle>Desenvolvedor de Software.</JobTitle>
      <AboutMeContainer className={showBio && "show"}>
        Estou com {myAge} anos e atualmente sou desenvolvedor front end.
        Trabalho com a linguagem javascript, e amo o que faço. Bem humorado,
        curioso e apaixonado por fotografia urbana.{" "}
        <b>Da ZL de São Paulo, para o mundo.</b>
      </AboutMeContainer>
      <SocialNetworks />
    </ResumeWrapper>
  );
};

export default Resume;
