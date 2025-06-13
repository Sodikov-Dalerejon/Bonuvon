import React from 'react';
import { useTranslation } from 'react-i18next';
const MainSection = () => {
    const { t } = useTranslation()
    return (
        <section id="main" className="py-16 bg-white text-center">
            <h1 className="text-4xl font-bold mb-4">{t("main.main_title")}</h1>
            <p className="max-w-3xl mx-auto text-lg">
                {t("main.main_description")}
            </p>
        </section>
    );
};

export default MainSection;
