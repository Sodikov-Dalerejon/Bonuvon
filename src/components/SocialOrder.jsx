import { useState } from 'react';
import axios from "axios"
import { useTranslation } from 'react-i18next';
const SocialOrder = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")
    const { t } = useTranslation()
    const VITE_baseBackendURL = import.meta.env.VITE_baseBackendURL
    async function handleSubmit(e) {
        e.preventDefault()
        const form = {
            username, email, text
        }
        const result = await axios.post(VITE_baseBackendURL, form)
    }
    return (
        <section id="footer" className="py-16 bg-white text-center">
            <h2 className="text-3xl font-bold mb-6">{t("contact")}</h2>
            <p className="max-w-3xl mx-auto text-lg mb-6">
                {t("common.phone")}: <a href="tel:+998901234567" className="text-blue-600 font-bold">+998 90 123 45 67</a>
            </p>
            <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                    <input type="text" placeholder={t("name")} className="border rounded px-4 py-2" onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder={t("email")} className="border rounded px-4 py-2" onChange={(e) => setEmail(e.target.value)} />
                    <textarea placeholder={t("message")} rows="5" className="border rounded px-4 py-2" onChange={(e) => setText(e.target.value)}></textarea>
                    <button type="submit" className="bg-blue-700 text-white py-2 rounded">{t("common.submit")}</button>
                </div>
            </form>
        </section>
    );
};

export default SocialOrder;
