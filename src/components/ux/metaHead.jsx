import Head from "next/head";
import { getTranslations } from "next-intl/server";

const MetaHead = async ({ name, urlPath, children }) => {
    const t = await getTranslations('metadata');

    return (
        <>
            <Head>
                <title>{t(`pages.${name}`)}</title>
                <meta name="description" content="Институт Информационных Фундаментальных технологий объединяет обучение, исследования и практику в инженерии, программировании и робототехнике. Мы готовим разработчиков и инженеров, даём фундаментальные знания и практические навыки для создания инновационных цифровых решений и успешной карьеры в IT и смежных технических областях. Учёба включает проекты, стажировки и междисциплинарную практику."/>
                <meta name="keywords" content={t(`keywords.${name}`)}/>
                <link rel="canonical" href={`https://iifn.kz/${urlPath}`} />
                <meta property="og:title" content={t(`pages.${name}`)} />
                <meta property="og:description" content="Институт Информационных Фундаментальных технологий объединяет обучение, исследования и практику в инженерии, программировании и робототехнике. Мы готовим разработчиков и инженеров, даём фундаментальные знания и практические навыки для создания инновационных цифровых решений и успешной карьеры в IT и смежных технических областях. Учёба включает проекты, стажировки и междисциплинарную практику." />
            </Head>
            {children}
        </>
    );
}
 
export default MetaHead;