import Image from "next/image";
import { useTranslations } from "next-intl";

import Button from "../ui/button";

const NewsCard = ({ id, imageSrc }) => {
    const tHome = useTranslations('home');
    const tNews = useTranslations('news');

    return (
        <div className="flex flex-col rounded-[1.5rem] bg-yellow-2 w-full">
            <Image
            src={imageSrc}
            width={370}
            height={200}
            alt="News" className="w-full rounded-t-[1.5rem]"/>
            <div className="flex flex-col gap-3 text-white p-10">
                <span className="text-2xl font-semibold">{tNews(`${id}.date`)}</span>
                <h4 className="text-4xl font-bold line-clamp-2">{tNews(`${id}.title`)}</h4>
                <p style={{fontSize: 'clamp(1.5rem, 2vw, 1.75rem)'}}
                className="line-clamp-5">{tNews(`${id}.description`)}</p>
                <Button link={`news/${id}`} color='white' size='small' className='w-full text-brown mt-5 flex justify-between'>
                    {tHome('news.readMore')}
                    <svg viewBox="0 0 24 24" fill="none" className="w-8 group-hover:translate-x-1.5 -rotate-90" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.33199 16.3154C6.94146 15.9248 6.3083 15.9248 5.91777 16.3154C5.52725 16.7059 5.52725 17.339 5.91777 17.7296L10.5834 22.3952C11.3644 23.1762 12.6308 23.1762 13.4118 22.3952L18.0802 17.7267C18.4707 17.3362 18.4707 16.703 18.0802 16.3125C17.6897 15.922 17.0565 15.922 16.666 16.3125L13 19.9786V2.0001C13 1.44781 12.5523 1.0001 12 1.0001C11.4477 1.0001 11 1.44781 11 2.0001V19.9833L7.33199 16.3154Z" fill="currentColor"></path> </g></svg>
                </Button>
            </div>
        </div>
    );
}
 
export default NewsCard;