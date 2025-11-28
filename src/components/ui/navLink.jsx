'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const NavLink = ({ href, label, className }) => {
    const pathname = usePathname();
    const locale = useLocale();
    const activeStyles = pathname.slice(4) === href && 'border-3 border-yellow-1 text-yellow-1';

    return (
        <Link href={`/${locale}/${href}`} tabIndex={-1}>
            <button
            className={`bg-transparent font-medium px-[1.3rem] text-[1.6rem] h-[40px] cursor-pointer hover:text-yellow-1 rounded-2xl border-3 border-transparent
            ${activeStyles} ${className}`}>
                {label}
            </button>
        </Link>
    );
}
 
export default NavLink;