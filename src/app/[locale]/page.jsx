import { getTranslations } from "next-intl/server";
import Image from "next/image";

import Button from "../../components/ui/button";
import AnimatedTitle from "../../components/ux/animatedTitle";
import LoopCarousel from "../../components/ux/loopCarousel";
import FeatureCard from "../../components/layouts/featureCard";
import NewsCard from "../../components/layouts/newsCard";
import PhoneSendForm from "../../components/forms/phoneSendForm";

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
          <Button link='about-us' size="big" color="white" className='rounded-3xl font-semibold'>
            {t('hero.learnMore')}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-11 -rotate-90 group-hover:-translate-y-1 group-hover:translate-x-1" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7v10m0 0H7m10 0L7 7"/></svg>
          </Button>
          <Button link="#target-section" size="big" color="white" className='rounded-3xl font-semibold w-[60px] px-0! justify-center'>
            <svg viewBox="0 0 24 24" fill="none" className="w-12 group-hover:translate-y-1.5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.33199 16.3154C6.94146 15.9248 6.3083 15.9248 5.91777 16.3154C5.52725 16.7059 5.52725 17.339 5.91777 17.7296L10.5834 22.3952C11.3644 23.1762 12.6308 23.1762 13.4118 22.3952L18.0802 17.7267C18.4707 17.3362 18.4707 16.703 18.0802 16.3125C17.6897 15.922 17.0565 15.922 16.666 16.3125L13 19.9786V2.0001C13 1.44781 12.5523 1.0001 12 1.0001C11.4477 1.0001 11 1.44781 11 2.0001V19.9833L7.33199 16.3154Z" fill="currentColor"></path> </g></svg>
          </Button>
        </div>
        <div className="flex gap-5 sm:hidden relative z-10">
          <Button link='about-us' size="small" color="white" className='rounded-2xl font-semibold'>
            {t('hero.learnMore')}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 -rotate-90 group-hover:-translate-y-1 group-hover:translate-x-1" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7v10m0 0H7m10 0L7 7"/></svg>
          </Button>
          <Button link="#target-section" size="small" color="white" className='rounded-2xl font-semibold w-[40px] px-0! justify-center'>
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
      <section className="lg:w-[77lvw] bg-gray rounded-[20px] py-[25px] max-sm:py-[20px] relative">
        <div className="top-0 z-2 rounded-[20px] absolute w-full h-full shadow-[inset_25px_0_16px_-8px_#F4F3F3,inset_-25px_0_16px_-8px_#F4F3F3]"></div>
        <LoopCarousel />
      </section>
      <section id="target-section">
          <h2  style={{fontSize: 'clamp(2rem, 5vw, 3rem)'}}
          className="text-center font-extrabold mb-[30px] max-sm:mb-[20px]">{t('features.title')}</h2>
          <div className="flex flex-col gap-[30px] max-sm:gap-[20px]">
            <FeatureCard icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12.5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6v13m9-13v13m9-13v13"/></svg>
            } title={t('features.cards.1.title')} text={t('features.cards.1.description')}/>
            <div className="self-end relative z-2">
              <FeatureCard icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12.5" viewBox="0 0 24 24" fill="currentColor"><g fill="none" fillRule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13 3a1 1 0 1 0-2 0v.5a1 1 0 1 0 2 0zm-8.5 9a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h.5a1 1 0 0 1 1 1M22 12a1 1 0 0 1-1 1h-.5a1 1 0 1 1 0-2h.5a1 1 0 0 1 1 1m-10 7.5a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0v-.5a1 1 0 0 1 1-1m7.778-13.864a1 1 0 0 0-1.414-1.414l-2.121 2.12a1 1 0 1 0 1.414 1.415zM7.758 16.243a1 1 0 0 1 0 1.414L5.635 19.78a1 1 0 0 1-1.414-1.415l2.121-2.12a1 1 0 0 1 1.414 0M5.635 4.222a1 1 0 0 0-1.414 1.414l2.12 2.121a1 1 0 0 0 1.415-1.414zm10.607 12.021a1 1 0 0 1 1.414 0l2.121 2.121a1 1 0 1 1-1.414 1.415l-2.121-2.122a1 1 0 0 1 0-1.414M12.948 6.14a1 1 0 0 0-1.888 0a8.02 8.02 0 0 1-4.92 4.92a1 1 0 0 0 0 1.888a8.03 8.03 0 0 1 4.92 4.92a1 1 0 0 0 1.888 0a8.03 8.03 0 0 1 4.92-4.92a1 1 0 0 0 0-1.888a8.03 8.03 0 0 1-4.92-4.92m-.944 9.094a10.05 10.05 0 0 0-3.23-3.23a10.05 10.05 0 0 0 3.23-3.23a10.05 10.05 0 0 0 3.23 3.23a10.05 10.05 0 0 0-3.23 3.23"/></g></svg>
              } title={t('features.cards.2.title')} text={t('features.cards.2.description')}/>
            </div>
            <div className="relative">
              
              <FeatureCard icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12.5" viewBox="1 1 22 22" fill="currentColor"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75"><path d="m4 10l8-4l8 4l-8 4zm16 0v4"/><path d="M7 12v5s.455 2 5 2c4.546 0 5-2 5-2v-5"/></g></svg>
              } title={t('features.cards.3.title')} text={t('features.cards.3.description')}
              children={
                <Image
                src='/images/features.svg'
                width={250}
                height={250}
                alt="Decor" className="absolute -top-67 z-1 ml-15 max-lg:hidden"/>
              }/>
            </div>
          </div>
      </section>
      <section className="bg-gray rounded-[20px] p-[25px] max-sm:p-[20px]">
            <h2 style={{fontSize: 'clamp(2rem, 5vw, 3rem)'}}
            className="text-center text-yellow-2 font-extrabold mb-[30px] max-sm:mb-[20px]">{t('news.title')}</h2>
            <div className="gap-[25px] grid md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] max-md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
              <NewsCard id='1' imageSrc='/images/news-1.jpg' />
              <NewsCard id='2' imageSrc='/images/news-2.jpg' />
              <NewsCard id='3' imageSrc='/images/news-3.jpg' />
            </div>
      </section>
      <div className="overflow-hidden">
        <section className="bg-red-1 rounded-[20px] p-[25px] max-sm:p-[20px] lg:min-h-[400px] relative mb-[30px]">
            <h2 style={{fontSize: 'clamp(1.8rem, 4vw, 4.5rem)'}}
            className="text-yellow-2 font-extrabold whitespace-pre-line max-lg:mb-8">
              {t('cta.title')}
            </h2>
            <Image
            src='/images/cta-3.svg'
            width={400}
            height={400}
            style={{ width: 'clamp(20rem, 25vw, 40rem)'}}
            alt="Decor" className="absolute left-25 top-65 max-lg:hidden"
            />
            <PhoneSendForm />
            <Image
            src='/images/cta-1.svg'
            width={225}
            height={225}
            style={{ width: 'clamp(17.5rem, 25vw, 22.5rem)'}}
            alt="Decor" className="absolute -bottom-50 right-165 z-5 max-lg:top-52.5 max-lg:right-25 max-lg:rotate-y-180 max-sm:hidden"
            />
            <Image
            src='/images/cta-2.svg'
            width={225}
            height={225}
            alt="Decor" className="absolute right-20 bottom-20 z-5 max-lg:hidden"
            />
        </section>
      </div>
    </div>
  );
}
 
export default HomePage;