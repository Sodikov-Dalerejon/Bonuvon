import React from 'react';
import { useTranslation } from 'react-i18next';
const Carousel = () => {
    const { t } = useTranslation()
    return (
        <div className="relative w-full h-72 md:h-96 overflow-hidden">
            <img src="/img/pociag-towarowy-z-generatywnymi-kontenerami-ai-scaled.jpg" className="w-full h-full object-cover" alt="Slide" />
            <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
                <h1 className="text-white text-3xl md:text-5xl font-bold">{t("common.section_1_text")}</h1>
            </div>
        </div>
    );
};

export default Carousel;
