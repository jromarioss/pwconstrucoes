import { Fade } from "react-awesome-reveal";

import { About } from "./components/About/inde";
import { Carousel } from "./components/Carousel";
import { Projects } from "./components/Projects/index;";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Carousel />
      <Fade delay={300} duration={1000}>
        <About />
      </Fade>
      <Fade delay={300} duration={1000}>
        <Projects />
      </Fade>
    </HomeContainer>
  );
}