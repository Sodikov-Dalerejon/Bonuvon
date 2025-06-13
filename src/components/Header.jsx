import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="bg-blue-900 text-white p-4 flex justify-between items-center fixed z-10 w-full">
            <a className="text-2xl font-bold" href=''>Bonavon-2018</a>
            <nav className="flex items-center gap-4">
                <a href="" className="hover:text-blue-100">{t('common.home')}</a>
                <a href="#about-us" className="hover:text-blue-100">{t('common.about')}</a>
                <a href="#services" className="hover:text-blue-100">{t('common.services')}</a>
                <a href="#blog-section" className="hover:text-blue-100">{t('common.blog')}</a>
                <a href="#footer" className="hover:text-blue-100">{t('common.order')}</a>
                <div className="ml-4">
                    <button onClick={() => changeLanguage('en')} className="mr-2 hover:text-blue-100 cursor-pointer">EN</button>
                    <button onClick={() => changeLanguage('ru')} className='cursor-pointer hover:text-blue-100'>RU</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
