'use client';

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import Button from "../../../../components/ui/button";

const NotFound = () => {
    const t = useTranslations('notFound');
    const { replace } = useRouter();

    return (
        <div className="mt-40 flex flex-col items-center justify-center gap-15">
            <Image
            src='/images/notFound.svg'
            width={200}
            height={200}
            alt="Not Found Decor"/>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.7rem)'}}
            className="font-extrabold text-center max-w-[700px]">{t('underDevelopment')}</h1>
            <Button onClick={() => replace('/')} size='big' color='yellow-1' className='font-semibold w-min text-nowrap max-sm:hidden'>
                <svg viewBox="0 0 24 24" fill="none" className="w-10 group-hover:-translate-x-1.5 rotate-z-90 mr-4" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.33199 16.3154C6.94146 15.9248 6.3083 15.9248 5.91777 16.3154C5.52725 16.7059 5.52725 17.339 5.91777 17.7296L10.5834 22.3952C11.3644 23.1762 12.6308 23.1762 13.4118 22.3952L18.0802 17.7267C18.4707 17.3362 18.4707 16.703 18.0802 16.3125C17.6897 15.922 17.0565 15.922 16.666 16.3125L13 19.9786V2.0001C13 1.44781 12.5523 1.0001 12 1.0001C11.4477 1.0001 11 1.44781 11 2.0001V19.9833L7.33199 16.3154Z" fill="currentColor"></path> </g></svg>
                {t('goHome')}
            </Button>
            <Button onClick={() => replace('/')} size='small' color='yellow-1' className='font-semibold w-min text-nowrap sm:hidden'>
                <svg viewBox="0 0 24 24" fill="none" className="w-8 group-hover:-translate-x-1.5 rotate-z-90 mr-4" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.33199 16.3154C6.94146 15.9248 6.3083 15.9248 5.91777 16.3154C5.52725 16.7059 5.52725 17.339 5.91777 17.7296L10.5834 22.3952C11.3644 23.1762 12.6308 23.1762 13.4118 22.3952L18.0802 17.7267C18.4707 17.3362 18.4707 16.703 18.0802 16.3125C17.6897 15.922 17.0565 15.922 16.666 16.3125L13 19.9786V2.0001C13 1.44781 12.5523 1.0001 12 1.0001C11.4477 1.0001 11 1.44781 11 2.0001V19.9833L7.33199 16.3154Z" fill="currentColor"></path> </g></svg>
                {t('goHome')}
            </Button>
        </div>
    );
}
 
export default NotFound;