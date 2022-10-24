import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";

import { CarouselContainer, CarouselTitle } from "./styles";

export function Carousel() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    defaultAnimation: {
      duration: 500,
    }
  });

  return (
    <CarouselContainer id="home">
      <CarouselTitle>
        <h2>PW Construções</h2>
        <p>Qualidade da <span>mão de Obra</span></p>
      </CarouselTitle>
      <div ref={ref} className="keen-slider">
        <div className="keen-slider__slide">
          <img src="https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className="keen-slider__slide">
          <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className="keen-slider__slide">
          <img src="https://images.pexels.com/photos/2001829/pexels-photo-2001829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>
    </CarouselContainer>
  );
}