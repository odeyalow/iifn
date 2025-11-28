'use client';

import { AnimatePresence, motion } from "motion/react"
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

import ArrowDownIcon from '../../assets/icons/arrowDownIcon';
import Button from './button';

const LangSelect = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale= useLocale();

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

  return (
    <div className="relative group h-full" onClick={() => setShowdropdown(prev => !prev)} ref={selectBtnRef}>
       <Button className={`font-bold flex gap-[5px] ${showDropdown && 'bg-yellow-2'}`}>
          {locale.toUpperCase()}
          <ArrowDownIcon/>
        </Button>
      <AnimatePresence initial={false}>
        {
          showDropdown && (
            <div className='mt-2 absolute w-full' ref={dropdownRef}>
              <motion.div
                transition={{
                  ease: 'backInOut',
                  duration: .2
                }}
                initial={{ opacity: 0, scale: 0.9, translateY: -10 }}
                animate={{ opacity: 1, scale: 1, translateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, translateY: -10 }}
                className="absolute top-full bg-gray rounded-2xl w-full flex flex-col p-3 gap-2">
                  {['kz', 'ru', 'en'].map((loc) => (
                    <button
                      key={loc}
                      disabled={loc === locale}
                      onClick={() => router.replace('/'+loc+'/' + pathname.slice(3))}
                      className={`py-2 px-3 text-left hover:bg-gray-200 text-2xl rounded-xl font-medium ${
                        loc === locale ? 'bg-yellow-1 hover:bg-yellow-1 cursor-auto' : 'cursor-pointer'
                      }`}
                    >
                      {loc.toUpperCase()}
                    </button>
                  ))}
                </motion.div>
            </div>
          )
        }
      </AnimatePresence>      
    </div>
  );
};

export default LangSelect;