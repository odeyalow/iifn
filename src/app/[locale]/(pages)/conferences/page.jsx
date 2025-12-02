import { getTranslations } from "next-intl/server";
import Image from "next/image";

import PageContainer from "../../../../components/layouts/pageContainer";
import Button from "../../../../components/ui/button";

const ConferencesPage = async () => {
    const t = await getTranslations('conferences');

    return (
        <PageContainer title={t('title')}>
            <section className="flex gap-[2.5rem] items-center max-md:flex-col">
                <div className="w-full relative">
                    <Image
                    src='/images/conference-1.png'
                    width={100}
                    height={100}
                    alt="Conference Cover" className="rounded-t-3xl w-full max-h-[300px] max-sm:max-h-[200px] object-cover"/>
                    <div className="bg-gray rounded-b-3xl p-[2.5rem] max-sm:p-[2rem]">
                        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)'}}
                        className="font-bold mb-4">{t('1.title')}</h2>
                        <p style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)'}}
                        className="font-medium line-clamp-4 mb-10">{
                            t.rich('1.text', {
                                link1: (chunks) => chunks,
                                link2: (chunks) => chunks
                            })    
                        }</p>
                        <Button link='conferences/1' color='white' size='big' className='w-full flex justify-between max-sm:hidden'>
                            {t('readMore')}
                             <svg viewBox="0 0 24 24" fill="none" className="w-10 -rotate-90 group-hover:translate-x-1.5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.33199 16.3154C6.94146 15.9248 6.3083 15.9248 5.91777 16.3154C5.52725 16.7059 5.52725 17.339 5.91777 17.7296L10.5834 22.3952C11.3644 23.1762 12.6308 23.1762 13.4118 22.3952L18.0802 17.7267C18.4707 17.3362 18.4707 16.703 18.0802 16.3125C17.6897 15.922 17.0565 15.922 16.666 16.3125L13 19.9786V2.0001C13 1.44781 12.5523 1.0001 12 1.0001C11.4477 1.0001 11 1.44781 11 2.0001V19.9833L7.33199 16.3154Z" fill="currentColor"></path> </g></svg>
                        </Button>
                        <Button link='conferences/1' color='white' size='small' className='w-full flex justify-between sm:hidden'>
                            {t('readMore')}
                             <svg viewBox="0 0 24 24" fill="none" className="w-7 -rotate-90 group-hover:translate-x-1.5" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.33199 16.3154C6.94146 15.9248 6.3083 15.9248 5.91777 16.3154C5.52725 16.7059 5.52725 17.339 5.91777 17.7296L10.5834 22.3952C11.3644 23.1762 12.6308 23.1762 13.4118 22.3952L18.0802 17.7267C18.4707 17.3362 18.4707 16.703 18.0802 16.3125C17.6897 15.922 17.0565 15.922 16.666 16.3125L13 19.9786V2.0001C13 1.44781 12.5523 1.0001 12 1.0001C11.4477 1.0001 11 1.44781 11 2.0001V19.9833L7.33199 16.3154Z" fill="currentColor"></path> </g></svg>
                        </Button>
                    </div>
                    <div className="bg-yellow-1 px-[1.5rem] py-[1rem] rounded-2xl w-min flex gap-2 absolute -top-9 sm:left-10 max-sm:rounded-t-none max-sm:top-0 max-sm:right-7.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 max-sm:w-5" viewBox="0 0 256 256"><path fill="currentColor" d="M240 128a15.79 15.79 0 0 1-10.5 15l-63.44 23.07L143 229.5a16 16 0 0 1-30 0L89.93 166L26.5 143a16 16 0 0 1 0-30L90 89.93l23-63.43a16 16 0 0 1 30 0L166.07 90l63.43 23a15.79 15.79 0 0 1 10.5 15Z"/></svg>
                        <strong className="text-3xl font-extrabold duration-150 max-sm:text-2xl">{t('top')}</strong>
                    </div>
                </div>
                <div className="w-full">
                    <h3 className="text-center text-3xl text-black/25 font-semibold">{t('moreConferencesSoon')}</h3>
                </div>
            </section>
        </PageContainer>
    );
}
 
export default ConferencesPage;