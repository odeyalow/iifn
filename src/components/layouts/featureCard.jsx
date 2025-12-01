'use client';

import { motion, useInView } from 'motion/react';

const FeatureCard = ({ icon, title, text, children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'backInOut' }}
            viewport={{ once: true, amount: 0.9 }}
        className="bg-yellow-1 rounded-[20px] p-10 max-w-[800px] max-lg:max-w-[600px] relative">
            <div className="flex gap-7.5 items-center mb-5">
                <div className="bg-white text-brown p-5 rounded-2xl">{icon}</div>
                <h3 style={{fontSize: 'clamp(1.75rem, 3vw, 2.25rem)'}}
                className="text-white font-bold">{title}</h3>
            </div>
            <p style={{fontSize: 'clamp(1.5rem, 2vw, 1.875rem)'}}
            className="text-white text-3xl">{text}</p>
            <div>
                {children}
            </div>
        </motion.div>
    );
}
 
export default FeatureCard;