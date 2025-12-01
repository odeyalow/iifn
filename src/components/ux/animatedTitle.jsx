'use client';

import Typewriter from "typewriter-effect";
import { useTranslations } from "next-intl";

const AnimatedTitle = () => {
    const t = useTranslations('home');
    return (
        <div  style={{height: 'clamp(13rem, 22.5vw, 17.5rem)'}}>
            <h1 style={{fontSize: 'clamp(2.5rem, 5vw, 5.5rem)'}}
                className="font-extrabold text-red-1 mb-15 ">
                <Typewriter
                    options={{
                        strings: [t('hero.title.1'), t('hero.title.2'), t('hero.title.3'), t('hero.title.4')],
                        autoStart: true,
                        deleteSpeed: 50,
                        loop: true,
                    }}
                />
            </h1>   
        </div>
    );
}
 
export default AnimatedTitle;