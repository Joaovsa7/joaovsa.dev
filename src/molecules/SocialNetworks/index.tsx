import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Wrapper, Anchor } from "./style";

const SocialNetworks: React.FC = () => (
  <Wrapper>
    <Anchor
      href="https://www.github.com/joaovsa7"
      rel="noopener noreferer"
      target="blank"
    >
      <FaGithub />
    </Anchor>
    <Anchor
      href="https://www.twitter.com/jvsa7"
      rel="noopener noreferer"
      target="blank"
    >
      <FaTwitter />
    </Anchor>
    <Anchor
      href="https://www.linkedin.com/in/jvsa7"
      rel="noopener noreferer"
      target="blank"
    >
      <FaLinkedinIn />
    </Anchor>
  </Wrapper>
);

export default SocialNetworks;
