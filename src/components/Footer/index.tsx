import { FooterBottom, FooterContainer, FooterContent } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <p>Rua: Benedito Píres 12</p>
          <p>Centro - CEP 18550-087 - Boituva/SP</p>
        </div>

        <div>
          <p>Celular: (11) 91330-3310</p>
          <p>Celular: (15) 99796-6738</p>
        </div>
      </FooterContent>
      <p>E-mail: pwconstrucoes10@gmail.com</p>
      <FooterBottom>
        <small>PW &copy; Todos Direitos reservados</small>
      </FooterBottom>
    </FooterContainer>
  );
}