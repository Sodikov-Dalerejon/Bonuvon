import React from 'react'
import { useTranslation } from 'react-i18next';

const Guarantee = () => {
    const { t } = useTranslation()
    return (
        <section className="py-16 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-6">{t("guarantee.title")}</h2>
            <p className="max-w-3xl mx-auto text-lg">
                {t("guarantee.description")}
            </p>
        </section>
    );
};

export default Guarantee;
