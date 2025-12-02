'use client';

import Image from "next/image";

const PageContainer = ({ title, children, decor, className }) => {
    return (
        <div className={`py-10 relative min-h-svh overflow-hidden ${className}`}>
            {
                title && <h1 className="bg-yellow-1 text-red-1 rounded-[2rem] px-[2rem] py-[1.5rem] mb-10 block w-min mx-auto text-nowrap text-[2rem] font-bold max-sm:text-[1.5rem] max-sm:rounded-[1.5rem]">{title}</h1>
            }
            <div className="flex flex-col gap-[3rem] max-sm:gap-[2rem] relative z-1">
                {children}
            </div>
            {
                decor && (
                    <div style={{ height: 'clamp(150px, 40vw, 300px)' }}>
                        <Image
                            src='/images/info-1.svg'
                            width={300}
                            height={300}
                            style={{ width: 'clamp(15rem, 40vw, 30rem)' }}
                            alt="Decor" className="absolute bottom-0 md:right-0 max-md:left-[50%] max-md:-translate-x-[50%] "
                        />
                    </div>
                )
            }
        </div>
    );
}
 
export default PageContainer;