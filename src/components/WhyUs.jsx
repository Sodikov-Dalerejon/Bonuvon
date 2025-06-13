import React from 'react';
import { useTranslation } from 'react-i18next';
const WhyUs = () => {
    const { t } = useTranslation()
    return (
        <section className="py-16 bg-gray-100">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">{t("whyUs.whyWe")}</h2>
                <p className="max-w-3xl mx-auto">
                    {t("whyUs.why_main")}
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white p-6 rounded shadow">
                    <i className="fas fa-shield-alt text-4xl text-blue-700 mb-4"></i>
                    <h3 className="font-bold text-xl mb-2">{t("whyUs.security")}</h3>
                    <p>{t("whyUs.why_security")}</p>
                </div>
                <div className="bg-white p-6 rounded shadow">
                    <i className="fas fa-truck-fast text-4xl text-blue-700 mb-4"></i>
                    <h3 className="font-bold text-xl mb-2">{t("whyUs.fast_delivering")}</h3>
                    <p>{t("whyUs.why_fast_delivery")}</p>
                </div>
                <div className="bg-white p-6 rounded shadow">
                    <i className="fas fa-coins text-4xl text-blue-700 mb-4"></i>
                    <h3 className="font-bold text-xl mb-2">{t("whyUs.flexible_pricing")}</h3>
                    <p>{t("whyUs.why_flexible_pricing")}</p>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
