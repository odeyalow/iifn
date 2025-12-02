'use client';

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import PageContainer from "../../../../../components/layouts/pageContainer";
import Button from "../../../../../components/ui/button";
import TextBlock from "../../../../../components/ux/textBlock";

const ConferencesPage = () => {
    const t =  useTranslations('conferences');
    const pathname = usePathname();
    const conferenceNumber = pathname.slice(16);

    return (
        <PageContainer>
            <TextBlock title={t(`${conferenceNumber}.title`)} text={
                <>
                    <Image
                    src={`/images/conference-${conferenceNumber}.png`}
                    width={500}
                    height={500}
                    alt="Conference Cover" className="w-auto sm:float-left sm:mr-[25px] max-sm:mb-[20px] rounded-2xl mx-auto"/>
                    {
                        t.rich(`${conferenceNumber}.text`, {
                            link1: (chunks) => <Link href='https://conf.astrokaznu.kz/' className="text-yellow-1 hover:underline">{chunks}</Link>,
                            link2: (chunks) => <Link href='https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/en/meetings/' className="text-yellow-1 hover:underline">{chunks}</Link>
                        })  
                    }              
                </>
            }/>
        </PageContainer>
    );
}
 
export default ConferencesPage;