'use client';

import { useTranslations } from "next-intl";

const NotFound = () => {
    const t = useTranslations('notFound');

    return (
        <h1>404</h1>
    );
}
 
export default NotFound;