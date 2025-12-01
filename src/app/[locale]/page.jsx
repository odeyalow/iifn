import { getTranslations } from "next-intl/server";
import Image from "next/image";

import Button from "../../components/ui/button";
import AnimatedTitle from "../../components/ux/animatedTitle";
import LoopCarousel from "../../components/ux/loopCarousel";

const HomePage = async () => {
  const t = await getTranslations('home');

  return (
    <div className="flex flex-col gap-[30px] max-sm:gap-[20px]">
      <section className="w-full sm:min-h-[80svh] bg-yellow-1 rounded-[20px] p-15 max-sm:p-10 mt-12 flex flex-col justify-between gap-10 relative">
        <div className="max-sm:mb-40">
          <AnimatedTitle />
          <div className="flex">
            <div className="bg-white rounded-3xl p-10 max-w-[690px] relative mr-[40%] max-md:mr-[25%] max-sm:mr-0">
            <p style={{fontSize: 'clamp(1.5rem, 2vw, 1.8rem)'}}
              className="font-medium ">{
              t.rich('hero.description', {
                  strong: (chunks) => <strong>  {chunks}</strong>
                })
              } 
            </p>
            <Image
            src='/images/hero-2.svg'
            width={32}
            height={32}
            alt="Decor" className="absolute -bottom-4 -right-5.5 max-sm:right-15 max-sm:hidden"/>
            <Image
            src='/images/hero-3.svg'
            width={50}
            height={50}
            alt="Decor" className="absolute -bottom-7 right-30 sm:hidden"/>
          </div>
          </div>
        </div>
        <div className="flex gap-5 max-sm:hidden">
          <Button link='about-us' size="big" color="white" className='rounded-3xl font-semibold group'>
            {t('hero.learnMore')}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-11 -rotate-90 group-hover:-translate-y-1 group-hover:translate-x-1" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7v10m0 0H7m10 0L7 7"/></svg>
          </Button>
          <Button size="big" color="white" className='rounded-3xl font-semibold group w-[60px] px-0! justify-center group'>
            <svg viewBox="0 0 24 24" fill="none" className="w-12 group-hover:translate-y-1.5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.33199 16.3154C6.94146 15.9248 6.3083 15.9248 5.91777 16.3154C5.52725 16.7059 5.52725 17.339 5.91777 17.7296L10.5834 22.3952C11.3644 23.1762 12.6308 23.1762 13.4118 22.3952L18.0802 17.7267C18.4707 17.3362 18.4707 16.703 18.0802 16.3125C17.6897 15.922 17.0565 15.922 16.666 16.3125L13 19.9786V2.0001C13 1.44781 12.5523 1.0001 12 1.0001C11.4477 1.0001 11 1.44781 11 2.0001V19.9833L7.33199 16.3154Z" fill="currentColor"></path> </g></svg>
          </Button>
        </div>
        <div className="flex gap-5 sm:hidden relative z-10">
          <Button link='about-us' size="small" color="white" className='rounded-2xl font-semibold group'>
            {t('hero.learnMore')}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 -rotate-90 group-hover:-translate-y-1 group-hover:translate-x-1" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7v10m0 0H7m10 0L7 7"/></svg>
          </Button>
          <Button size="small" color="white" className='rounded-2xl font-semibold group w-[40px] px-0! justify-center group'>
            <svg viewBox="0 0 24 24" fill="none" className="w-9 group-hover:translate-y-1.5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.33199 16.3154C6.94146 15.9248 6.3083 15.9248 5.91777 16.3154C5.52725 16.7059 5.52725 17.339 5.91777 17.7296L10.5834 22.3952C11.3644 23.1762 12.6308 23.1762 13.4118 22.3952L18.0802 17.7267C18.4707 17.3362 18.4707 16.703 18.0802 16.3125C17.6897 15.922 17.0565 15.922 16.666 16.3125L13 19.9786V2.0001C13 1.44781 12.5523 1.0001 12 1.0001C11.4477 1.0001 11 1.44781 11 2.0001V19.9833L7.33199 16.3154Z" fill="currentColor"></path> </g></svg>
          </Button>
        </div>
        <Image
        src='/images/hero-1.svg'
        width={500}
        height={500}
        alt="Decor"
        style={{width: 'clamp(17.5rem, 40vw, 50rem)'}}
        className="max-w-[500px] absolute max-sm:max-w-[175px] z-5 max-sm:-right-10 -right-25 -bottom-45 max-lg:-bottom-15 max-md:-bottom-7"/>
      </section>
      <section className="w-full bg-gray rounded-[20px] py-[25px] max-sm:py-5] relative">
        <div className="top-0 z-2 rounded-[20px] absolute w-full h-full shadow-[inset_25px_0_16px_-8px_#F4F3F3,inset_-25px_0_16px_-8px_#F4F3F3]"></div>
        <LoopCarousel />
      </section>
      <section >
          <h2 className="text-5xl">{t('features.title')}</h2>

      </section>
    </div>
  );
}
 
export default HomePage;