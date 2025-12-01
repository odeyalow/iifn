'use client';

import { IMaskInput } from "react-imask";

const PhoneInput = () => {
    return (
        <div className="bg-white py-4 px-6 flex gap-5 rounded-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="min-w-7 max-w-7" viewBox="0 0 512 512"><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            <IMaskInput
            mask="+7 (000) 000 00 00"
            placeholder='+7 (___) ___ __ __'
            name='phone-number'
            type="tel"
            className="text-3xl"
            />
        </div>
    );
}
 
export default PhoneInput;