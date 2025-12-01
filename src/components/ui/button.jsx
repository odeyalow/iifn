import Link from "next/link";
import { useLocale } from "next-intl";

const Button = ({ size, color, link, className, onClick, children }) => {
    const locale = useLocale();

    const sizeStyles = 
    (size === 'big' && 'h-[60px] text-[20px] flex items-center px-10') ||
    (size === 'small' && 'h-[40px] text-[18px] flex items-center px-[1.3rem]');
    const colortStyles = 
    (color === 'white' && 'bg-white hover:bg-gray') ||
    (color === 'yellow-1' && 'bg-yellow-1 hover:bg-yellow-2') ||
    (color === 'yellow-2' && 'bg-yellow-2 hover:bg-orange-500');

    if ( link ) {
        return (
            <Link href={`/${locale}/${link}`} tabIndex={-1}>
                <button className={`rounded-2xl active:translate-y-0.5 cursor-pointer group ${sizeStyles} ${colortStyles} ${className}`}>
                    {children}
                </button>
            </Link>
        );
    } else {
        return (
            <button onClick={onClick}
            className={`rounded-2xl active:translate-y-0.5 cursor-pointer group ${sizeStyles} ${colortStyles} ${className}`}>
                {children}
            </button>
        );
    }
}
 
export default Button;