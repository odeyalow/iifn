import { getTranslations } from "next-intl/server";
;
import IconButton from "../ui/iconButton";
import NavLink from "../ui/navLink";
import LangSelect from "../ui/langSelect";
import NavMenu from "../ui/navMenu";

import WhatsappIcon from "../../assets/socials/whatsappIcon";
import InstagramIcon from "../../assets/socials/instagramIcon";

const Header = async () => {
    const t = await getTranslations('headerFooter');
    return (
        <header className="w-full px-10 max-w-[1230px] mx-auto min-h-auto flex justify-between items-center gap-2.5 z-99">
            <NavLink href='' label={t('logoText')} className="text-[2rem] font-extrabold! bg-yellow-1 border-none text-brown! hover:bg-yellow-2"/>
            <nav className="max-lg:hidden">
                <NavLink href='' label={t('home')}/>
                <NavLink href='about-us' label={t('aboutUs')}/>
                <NavLink href='conferences' label={t('conferences')}/>
                <NavLink href='journals' label={t('journals')}/>
            </nav>
            <div className="flex gap-2.5">
                <IconButton link="/"><WhatsappIcon /></IconButton>
                <IconButton link="/"><InstagramIcon /></IconButton>
                <LangSelect />
                <div className="lg:hidden"><NavMenu /></div>
            </div>
        </header>
    );
}
 
export default Header;