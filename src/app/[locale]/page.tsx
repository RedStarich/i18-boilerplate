import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function HomePage() {
    const t = await getTranslations('HomePage');
    return (
        <div>
            <header>
                <h1>{t('title')}</h1>
            </header>
            <main>
                <p>{t('about')}</p>
            </main>
            <Link href="/about">about</Link>
        </div>
    );
}