'use client';

import { useTranslations } from "next-intl";
import { useState } from "react";
import { IMaskInput } from "react-imask";

import Button from "../ui/button";

const PhoneSendForm = () => {
    const t = useTranslations('home');
    const [phone, setPhone] = useState();
    const [loading, setLoading] = useState(false);

    const onSend = async () => {
        if ( !phone ) alert(t('cta.phoneValidation'));
        else {
            setLoading(true);

            const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone }),
            });
            if (res.ok) {
                setLoading(false);
                alert(t('cta.sent'));
                setPhone("");
            } else {
                setLoading(false);
                alert(t('cta.sendError'));
            }
        }
    }

    return (
        <div className="bg-red-2 p-[25px] rounded-[15px] sm:w-[370px] flex flex-col gap-5 lg:absolute bottom-[25px] right-[175px] z-10 max-sm:mx-auto">
            <div className="bg-white py-4 px-6 flex gap-5 rounded-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" className="min-w-7 max-w-7" viewBox="0 0 512 512"><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                <IMaskInput
                mask="+7 (000) 000 00 00"
                placeholder='+7 (___) ___ __ __'
                name='phone-number'
                type="tel"
                className="text-3xl"
                value={phone}
                onAccept={(value) => setPhone(value)}
                />
            </div>
            <Button disabled={loading} onClick={onSend} color='yellow-2' size='small' className='w-full justify-center font-medium relative z-20'>
                {
                    loading ? (
                        <svg fill="#850A0A" viewBox="0 0 24 24" className="size-15" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="12" r="0"><animate begin="0;spinner_z0Or.end" attributeName="r" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3" fill="freeze"/><animate begin="spinner_OLMs.end" attributeName="cx" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12" fill="freeze"/><animate begin="spinner_UHR2.end" attributeName="cx" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20" fill="freeze"/><animate id="spinner_lo66" begin="spinner_Aguh.end" attributeName="r" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0" fill="freeze"/><animate id="spinner_z0Or" begin="spinner_lo66.end" attributeName="cx" dur="0.001s" values="20;4" fill="freeze"/></circle><circle cx="4" cy="12" r="3"><animate begin="0;spinner_z0Or.end" attributeName="cx" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12" fill="freeze"/><animate begin="spinner_OLMs.end" attributeName="cx" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20" fill="freeze"/><animate id="spinner_JsnR" begin="spinner_UHR2.end" attributeName="r" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0" fill="freeze"/><animate id="spinner_Aguh" begin="spinner_JsnR.end" attributeName="cx" dur="0.001s" values="20;4" fill="freeze"/><animate begin="spinner_Aguh.end" attributeName="r" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3" fill="freeze"/></circle><circle cx="12" cy="12" r="3"><animate begin="0;spinner_z0Or.end" attributeName="cx" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20" fill="freeze"/><animate id="spinner_hSjk" begin="spinner_OLMs.end" attributeName="r" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0" fill="freeze"/><animate id="spinner_UHR2" begin="spinner_hSjk.end" attributeName="cx" dur="0.001s" values="20;4" fill="freeze"/><animate begin="spinner_UHR2.end" attributeName="r" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3" fill="freeze"/><animate begin="spinner_Aguh.end" attributeName="cx" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12" fill="freeze"/></circle><circle cx="20" cy="12" r="3"><animate id="spinner_4v5M" begin="0;spinner_z0Or.end" attributeName="r" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="3;0" fill="freeze"/><animate id="spinner_OLMs" begin="spinner_4v5M.end" attributeName="cx" dur="0.001s" values="20;4" fill="freeze"/><animate begin="spinner_OLMs.end" attributeName="r" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="0;3" fill="freeze"/><animate begin="spinner_UHR2.end" attributeName="cx" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="4;12" fill="freeze"/><animate begin="spinner_Aguh.end" attributeName="cx" calcMode="spline" dur="0.5s" keySplines=".36,.6,.31,1" values="12;20" fill="freeze"/></circle></svg>
                    ) : t('cta.callMeBack')
                }
            </Button>
        </div>
    );
}
 
export default PhoneSendForm;