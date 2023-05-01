import React, { useState } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

import './css/embla.css';

type PropType = {
  slides: JSX.Element[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    WheelGesturesPlugin({ forceWheelAxis: 'y', target: undefined }),
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              {slide}
            </div>
          ))}
          {/* <div className="embla__slide bg-teal-200">slide 1</div>
          <div className="embla__slide">slide 2</div> */}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
