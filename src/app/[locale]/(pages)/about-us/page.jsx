import { getTranslations } from "next-intl/server";
import Image from "next/image";

import TextBlock from "../../../../components/ux/textBlock";
import PageContainer from "../../../../components/layouts/pageContainer";
import Accordion from "../../../../components/ui/accordion";
import MotionCounter from "../../../../components/ux/motionCounter";
import MetaHead from "../../../../components/ux/metaHead";

const AboutUsPage = async () => {
    const t = await getTranslations('aboutUs');

    return (
        <MetaHead name='aboutUs' urlPath="/about-us">
            <PageContainer title={t('title')}>
                <TextBlock title={t('mainInfo.title')} text={t('mainInfo.text')}/>
                <section className="flex items-start justify-between max-md:flex-col md:gap-[5rem] relative">
                    <div className="w-full flex flex-col items-center max-md:hidden">
                        <Image
                        src="/images/aboutUs.svg"
                        width={250}
                        height={250}
                        alt="Decor" className="relative z-2"
                        />
                        <div className="max-w-[350px] w-full bg-yellow-1 text-red-1 text-center text-nowrap py-[1.5rem] px-[2rem] text-4xl rounded-4xl font-bold -translate-y-4">
                            <h5>{t('accordions.title')}</h5>
                        </div>
                    </div>
                    <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)'}}
                    className="font-extrabold mb-10 max-sm:mb-6 md:hidden">{t('accordions.title')}</h3>
                    <div className="flex flex-col gap-6">
                        <Accordion title={t('accordions.1.title')} text={t('accordions.1.text')} delay={1}/>
                        <Accordion title={t('accordions.2.title')} text={t('accordions.2.text')} delay={2}/>
                        <Accordion title={t('accordions.3.title')} text={t('accordions.3.text')} delay={3}/>
                    </div>
                </section>
                <section>
                    <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)'}}
                    className="font-extrabold mb-10 max-sm:mb-6">{t('numbers.title')}</h3>
                    <div className="bg-yellow-2 rounded-4xl p-[2.5rem] max-sm:p-[2rem] text-white grid grid-cols-2 min-[1000px]:grid-cols-4 max-[550px]:grid-cols-2 gap-10">
                        <MotionCounter text={t('numbers.researchStaff')} number={31}/>
                        <MotionCounter text={t('numbers.workYears')} number={5}/>
                        <MotionCounter text={t('numbers.projectsDone')} number={19}/>
                        <MotionCounter text={t('numbers.teachedStudents')} number={932}/>
                    </div>
                </section>
                <TextBlock title={t('summary.title')} text={t('summary.text')}/>
            </PageContainer>
        </MetaHead>
    );
}
 
export default AboutUsPage;