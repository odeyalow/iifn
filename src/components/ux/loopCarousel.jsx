"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useTranslations } from "next-intl";

const animation = { duration: 10000, easing: (t) => t }

const LoopCarousel = () => {
    const t = useTranslations('home');
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        drag: false,
        slides: {
            perView: 'auto'
        },
        created(s) {
        s.moveToIdx(5, true, animation)
        },
        updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
  })
    return (
        <div ref={sliderRef} className="keen-slider text-[2rem] max-sm:text-[1.5rem] w-full text-nowrap overflow-hidden">
            <strong className="keen-slider__slide font-medium shrink-0 w-auto max-w-max px-6 whitespace-nowrap">{t('infiniteScrollText.1')}</strong>
            <strong className="keen-slider__slide font-medium shrink-0 w-auto max-w-max px-6 whitespace-nowrap">{t('infiniteScrollText.2')}</strong>
            <strong className="keen-slider__slide font-medium shrink-0 w-auto max-w-max px-6 whitespace-nowrap">{t('infiniteScrollText.3')}</strong>
            <strong className="keen-slider__slide font-medium shrink-0 w-auto max-w-max px-6 whitespace-nowrap">{t('infiniteScrollText.4')}</strong>
            <strong className="keen-slider__slide font-medium shrink-0 w-auto max-w-max px-6 whitespace-nowrap">{t('infiniteScrollText.5')}</strong>
            <strong className="keen-slider__slide font-medium shrink-0 w-auto max-w-max px-6 whitespace-nowrap">{t('infiniteScrollText.6')}</strong>
            <strong className="keen-slider__slide font-medium shrink-0 w-auto max-w-max px-6 whitespace-nowrap">{t('infiniteScrollText.7')}</strong>
        </div>
    );
}
 
export default LoopCarousel;