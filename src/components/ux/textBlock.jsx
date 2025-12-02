import Image from "next/image";
import { useTranslations } from "next-intl";

import Button from "../ui/button";

const TextBlock = ({ title, text, decor }) => {
    const t = useTranslations('conferences');

    return (
        <div className="relative">
            <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)'}}
            className="font-extrabold mb-10 max-sm:mb-6">{title}</h3>
            <p style={{ fontSize: 'clamp(1.5rem, 3vw, 1.85rem)'}}
            className="font-medium bg-gray rounded-[20px] p-[25px] max-sm:p-[20px] whitespace-pre-line">{text}</p>
            {
                decor && (
                    <Image
                    src='/images/info-2.svg'
                    width={150}
                    height={150}
                    style={{ width: 'clamp(5rem, 25vw, 15rem)' }}
                    alt="Decor" className="absolute md:right-75 max-md:left-35"
                    />
                )
            }
        </div>
    );
}
 
export default TextBlock;