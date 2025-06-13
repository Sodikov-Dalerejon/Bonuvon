import React from 'react';
import { useTranslation } from 'react-i18next';
const Blog = () => {
    const { t } = useTranslation()
    return (
        <section id="blog-section" className="py-16 bg-white">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">{t("common.news")}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-gray-100 p-6 rounded shadow">
                    <img src="/img/photo_2025-02-23_18-34-26.jpg" alt="Yangilik 1" className="w-full h-48 object-cover mb-4 rounded" />
                    <h3 className="font-bold text-xl mb-2">{t("blog.blogTitle1")}</h3>
                    <p>{t("blog.blogDesc1")}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded shadow">
                    <img src="/img/nov1.jpg" alt="Yangilik 2" className="w-full h-48 object-cover mb-4 rounded" />
                    <h3 className="font-bold text-xl mb-2">{t("blog.blogTitle2")}</h3>
                    <p>{t("blog.blogDesc2")}</p>
                </div>
                <div className="bg-gray-100 p-6 rounded shadow">
                    <img src="/img/nov2.jpg" alt="Yangilik 3" className="w-full h-48 object-cover mb-4 rounded" />
                    <h3 className="font-bold text-xl mb-2">{t("blog.blogTitle3")}</h3>
                    <p>{t("blog.blogDesc3")}</p>
                </div>
            </div>
        </section>
    );
};

export default Blog;
