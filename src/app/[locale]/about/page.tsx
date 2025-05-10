import { getTranslations } from 'next-intl/server';

export default async function AboutPage() {
    const t = await getTranslations('AboutPage');
    return (
        <div>
            <header>
                <h1>{t('title')}</h1>
                <h2>{t('description')}</h2>
            </header>
        </div>
    );
}