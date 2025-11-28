'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const NavLink = ({ href, label, className, activeStyles }) => {
    const pathname = usePathname();
    const locale = useLocale();
    const styles = pathname.slice(4) === href && activeStyles;

    return (
        <Link href={`/${locale}/${href}`} tabIndex={-1}>
            <button tabIndex={pathname.slice(4) === href ? -1 : null}
            className={`bg-transparent font-medium px-[1.3rem] text-[1.6rem] h-[40px] cursor-pointer hover:text-yellow-1 rounded-2xl border-3 border-transparent
            ${styles} ${className}`}>
                {label}
            </button>
        </Link>
    );
}
 
export default NavLink;