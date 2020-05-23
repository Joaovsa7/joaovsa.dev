import React from "react";
import { Link } from "gatsby";
import SVGLogo from "../../assets/images/logo.svg";

const Logo: React.FC = () => (
  <Link to="/">
    <SVGLogo alt="" />
  </Link>
);

export default Logo;
