import {Link} from "react-scroll";

import { HeaderContainer, HeaderNav } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderNav>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
        <Link to="about" spy={true} smooth={true} offset={-95} duration={500}>Sobre nós</Link>
        <Link to="projects" spy={true} smooth={true} offset={-95} duration={500}>Projetos</Link>
        <Link to="contact" spy={true} smooth={true} offset={-95} duration={500}>Contato</Link>
      </HeaderNav>
    </HeaderContainer>
  );
}