import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-start">

                {/* Kompaniya haqida */}
                <div className="mb-8 md:mb-0 md:w-1/3">
                    <h2 className="text-2xl font-bold text-white mb-4">Bonavon-2018</h2>
                    <p className="max-w-xs">
                        {t("footer.description")}
                    </p>
                </div>

                {/* Sahifa bo'limlari uchun linklar */}
                <div className="mb-8 md:mb-0 md:w-1/3 grid grid-cols-1 gap-4">
                    <h3 className="font-semibold text-white mb-3">{t("footer.navigation")}</h3>
                    <ul className="space-y-2">
                        <li><a href="#main" className="hover:text-white">{t("common.home")}</a></li>
                        <li><a href="#services-title" className="hover:text-white">{t("footer.services")}</a></li>
                        <li><a href="#whyWe" className="hover:text-white">{t("footer.why_us")}</a></li>
                        <li><a href="#blog-section" className="hover:text-white">{t("footer.blog")}</a></li>
                        <li><a href="#contact" className="hover:text-white">{t("footer.contact")}</a></li>
                    </ul>
                </div>

                {/* Kontakt ma'lumotlar */}
                <div className="md:w-1/3">
                    <h3 className="font-semibold text-white mb-3">{t("footer.contact")}</h3>
                    <p>Tashkent, Uzbekistan</p>
                    <p>+998 90 123 45 67</p>
                    <p>info@bonavon-2018.uz</p>
                    <div className="flex space-x-4 mt-6">
                        <a href="#" className="hover:text-white"><i className="fab fa-facebook fa-lg"></i></a>
                        <a href="#" className="hover:text-white"><i className="fab fa-instagram fa-lg"></i></a>
                        <a href="#" className="hover:text-white"><i className="fab fa-linkedin fa-lg"></i></a>
                    </div>
                </div>

            </div>

            <div className="text-center text-gray-500 text-sm mt-12">
                © {new Date().getFullYear()} Bonavon-2018. {t("footer.rights")}
            </div>
        </footer>
    );
}

export default Footer;
