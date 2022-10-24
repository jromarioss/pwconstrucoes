import { AboutContainer } from "./styles";

export function About() {
  return (
    <AboutContainer id="about">
      <img src="https://images.pexels.com/photos/1451416/pexels-photo-1451416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <div>
        <h2>Sobre a PW Construções</h2>
        <p>Nosso objetivo de garantir a perfeita execução de seus projetos e cumprir as exigências e particularidades de cada cliente, a PW Construções atende todas as etapas do processo construtivo. Desde a análise técnica do terreno, cuidamos para que tudo transcorra de acordo com o planejado.</p>
        <p>Atuante em projetos comerciais, residenciais, institucionais e de loteamento e urbanização, a PW Construções possui uma equipe capacitada e especializada, buscando sempre oferecer serviços de alta qualidade para satisfazer com precisão todas as suas necessidades.</p>  
      </div>
    </AboutContainer>
  );
}