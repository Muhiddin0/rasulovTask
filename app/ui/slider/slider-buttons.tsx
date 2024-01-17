import React, { useEffect } from 'react';
import { useSwiper } from 'swiper/react';

// *** Icons ***
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoIosArrowRoundBack } from 'react-icons/io';

type Props = {};

export const SliderButtons = (props: Props) => {
  const slider = useSwiper();

  return (
    <>
      <button
        className="absolute right-0 top-[30%] z-20 transition-all hover:scale-110 active:scale-75"
        onClick={() => slider.slideNext()}
      >
        <IoIosArrowRoundForward size={40} />
      </button>
      <button
        className="absolute left-0 top-[30%] z-20 transition-all hover:scale-110 active:scale-75"
        onClick={() => slider.slidePrev()}
      >
        <IoIosArrowRoundBack size={40} />
      </button>
    </>
  );
};
