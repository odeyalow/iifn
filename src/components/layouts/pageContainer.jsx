'use client';

import { motion } from 'motion/react';

const PageContainer = ({ title, children, className }) => {
    return (
        <div className={`py-10 ${className}`}>
            {
                title && <h1 className="bg-yellow-1 text-red-1 rounded-[2rem] px-[2rem] py-[1.5rem] mb-10 block w-min mx-auto text-nowrap text-[2rem] font-bold max-sm:text-[1.5rem] max-sm:rounded-[1.5rem]">{title}</h1>
            }
            <div className="flex flex-col gap-[3rem] max-sm:gap-[2rem]">
                {children}
            </div>
        </div>
    );
}
 
export default PageContainer;