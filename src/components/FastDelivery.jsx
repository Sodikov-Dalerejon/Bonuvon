import React from 'react';
import { useTranslation } from 'react-i18next';

const FastDelivery = () => {
    const { t } = useTranslation()
    return (
        <section className="py-16 bg-blue-900 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">{t("fast_delivery.title")}</h2>
            <p className="max-w-3xl mx-auto text-lg">
                {t("fast_delivery.description")}
            </p>
        </section>
    );
};

export default FastDelivery;
