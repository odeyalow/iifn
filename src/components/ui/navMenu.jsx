'use client';

import { AnimatePresence, motion } from "motion/react"
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from "next/navigation";

import IconButton from "./iconButton";

const NavMenu = () => {
    const t = useTranslations('headerFooter');
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();

    const [showDropdown, setShowdropdown] = useState(false);
    const selectBtnRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !selectBtnRef.current.contains(event.target)) {
                setShowdropdown(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setShowdropdown(false);
    }, [pathname])

    return (
        <div className="relative z-99 group h-full w-full" ref={selectBtnRef}>
            <IconButton className={`font-bold flex gap-[5px] ${showDropdown && 'bg-yellow-2'}`} onClick={() => setShowdropdown(prev => !prev)}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Alt_04"> <path id="Vector" d="M5 17H19M5 12H19M5 7H13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
            </IconButton>
            <AnimatePresence initial={false}>
                {
                    showDropdown && (
                        <div className='mt-2 absolute w-full' ref={dropdownRef}>
                        <motion.div
                            transition={{
                            ease: 'backInOut',
                            duration: .2
                            }}
                            initial={{ opacity: 0, scale: 0.9, translateY: -10, translateX: 10 }}
                            animate={{ opacity: 1, scale: 1, translateY: 0, translateX: 0 }}
                            exit={{ opacity: 0, scale: 0.9, translateY: -10, translateX: 10 }}
                            className="absolute right-0 bg-gray rounded-2xl flex flex-col p-3 gap-2">
                                <button
                                    disabled={'' === pathname.slice(4)}
                                    onClick={() => router.push(`/${locale}`)}
                                    className={`py-2 px-3 text-left hover:bg-gray-200 text-2xl rounded-xl font-medium text-nowrap ${pathname.slice(4) === '' ? 'bg-yellow-1 hover:bg-yellow-1 cursor-auto' : 'cursor-pointer'}`}
                                >
                                    {t('home')}
                                </button>
                                <button
                                    disabled={'about-us' === pathname.slice(4)}
                                    onClick={() => router.push(`/${locale}/about-us`)}
                                    className={`py-2 px-3 text-left hover:bg-gray-200 text-2xl rounded-xl font-medium text-nowrap ${pathname.slice(4) === 'about-us' ? 'bg-yellow-1 hover:bg-yellow-1 cursor-auto' : 'cursor-pointer'}`}
                                >
                                    {t('aboutUs')}
                                </button>
                                <button
                                    disabled={'conferences' === pathname.slice(4)}
                                    onClick={() => router.push(`/${locale}/conferences`)}
                                    className={`py-2 px-3 text-left hover:bg-gray-200 text-2xl rounded-xl font-medium text-nowrap ${pathname.slice(4) === 'conferences' ? 'bg-yellow-1 hover:bg-yellow-1 cursor-auto' : 'cursor-pointer'}`}
                                >
                                    {t('conferences')}
                                </button>
                                <button
                                    disabled={'journals' === pathname.slice(4)}
                                    onClick={() => router.push(`/${locale}/journals`)}
                                    className={`py-2 px-3 text-left hover:bg-gray-200 text-2xl rounded-xl font-medium text-nowrap ${pathname.slice(4) === 'journals' ? 'bg-yellow-1 hover:bg-yellow-1 cursor-auto' : 'cursor-pointer'}`}
                                >
                                    {t('journals')}
                                </button>
                            </motion.div>
                        </div>
                    )
                }
            </AnimatePresence>      
        </div>
    );
}
 
export default NavMenu;