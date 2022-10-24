import { ContactContainer, ContactContent, ContactDiv, ContactIcons } from "./styles";

import iconGmail from '../../../../assets/iconGmail.svg';
import iconWhatsapp from '../../../../assets/iconWhatsapp.svg';
import iconInsta from '../../../../assets/iconInsta.svg';

export function Contact() {
  return (
    <ContactContainer id="contact">
      <h2>Contatos</h2>
      <ContactContent>
        <ContactDiv>
          <h3>Entre em contato conosco</h3>
          <ContactIcons>
            <a href="mailto:pwconstrucoes10@gmail.com" target="_blank" className="gmail">
              <img src={iconGmail} alt="" />
              <p>Gmail</p>
            </a>

            <a href="https://wa.me/5511913303310" target="_blank" className="whatsapp">
              <img src={iconWhatsapp} alt="" />
              <p>Whatasapp</p>
            </a>

            {/* <a href="" target="_blank" className="instagram">
              <img src={iconInsta} alt="" />
              <p>Instagram</p>
            </a> */}
          </ContactIcons>
        </ContactDiv>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.927473248134!2d-47.671737285027426!3d-23.282084884822257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5e2347b30e697%3A0x451a4c4a28dc28cd!2sR.%20Benedito%20P%C3%ADres%2C%2012%20-%20Vila%20Ferriello%2C%20Boituva%20-%20SP%2C%2018550-000!5e0!3m2!1spt-BR!2sbr!4v1666607203980!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
      </ContactContent>
    </ContactContainer>
  );
}