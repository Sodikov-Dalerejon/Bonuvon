import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <section id="about-us" className="py-16 bg-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">{t('common.about')}</h2>
                <p className="text-lg mb-6">
                    {t("about.about2")}
                </p>
                <div className='flex justify-center'>
                    <img src="/img/about.jpg" alt="About Us" className="w-2/3 h-[436px] rounded shadow object-contain" />
                </div>
                </div>
        </section>
    );
};

export default AboutUs;
