'use client';

import { motion } from 'motion/react';
import { useRef, useState } from "react";

const Accordion = ({ title, text, delay }) => {
    const [showDetails, setShowDetails] = useState(false);
    const ref = useRef(null);

    return (
        <motion.button
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
            duration: 0.1,
            ease: "easeIn",
            delay: delay * 0.25
        }}
        className={`bg-gray p-[2rem] max-sm:p-[1.5rem] rounded-4xl max-sm:rounded-3xl cursor-pointer ${!showDetails && 'hover:bg-zinc-200   '}`}
        onClick={() => setShowDetails(prev => !prev)}>
            <header className="flex justify-between items-center">
                <h4 style={{ fontSize: 'clamp(1.75rem, 4vw, 2rem)'}}
                className="text-left font-bold">{title}</h4>
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-12.5 max-sm:w-10 ${showDetails && 'rotate-x-180'}`} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m7 10l5 5m0 0l5-5"/></svg>
            </header>
            <div
            style={{
                maxHeight: showDetails ? `${ref.current?.scrollHeight}px` : "0",
            }}
            className="duration-200 overflow-hidden" ref={ref}>
                <p style={{ fontSize: 'clamp(1.5rem, 3vw, 1.85rem)'}}
                className={`text-left font-medium duration-200 pt-5 ${!showDetails && 'opacity-0'}`}>{text}</p>
            </div>
        </motion.button>
    );
}
 
export default Accordion;