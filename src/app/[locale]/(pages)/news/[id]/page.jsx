'use client';

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { notFound } from "next/navigation";
import Image from "next/image";

import PageContainer from "../../../../../components/layouts/pageContainer";
import TextBlock from "../../../../../components/ux/textBlock";

const SingleNewsPage = () => {
    const t =  useTranslations('news');
    const pathname = usePathname();
    const newsNumber = pathname.slice(9);    

    if ( isNaN(Number(newsNumber)) || newsNumber > 3 ) {
        notFound();
    }

    return (
        <PageContainer decor>
                <TextBlock decor title={t(`${newsNumber}.title`)} text={
                    <>
                        <Image
                        src={`/images/news-${newsNumber}.jpg`}
                        width={500}
                        height={500}
                        alt="News Cover" className="sm:float-left sm:mr-[25px] max-sm:mb-[20px] rounded-2xl mx-auto"/>
                        {
                            t(`${newsNumber}.description`)
                        }
                    </>
                }/>
        </PageContainer>
    );
}
 
export default SingleNewsPage;