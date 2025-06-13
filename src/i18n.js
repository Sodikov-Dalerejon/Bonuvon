import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            common: {
                home: "Home",
                about: "About Us",
                services: "Services",
                blog: "Blog",
                order: "Order Now",
                contactUs: "Contact Us",
                submit: "Submit",
                name: "Your Name",
                email: "Your Email",
                message: "Your Message",
                phone: "Phone Number",
                section_1_text: "Best quality service of logistics",
                our_services: "Our services",
                sklad: "Warehouse",
                logistics: "Logistics",
                cargo: "Cargo",
                road_transport: "Road transport",
                packaging: "Packaging",
                warehousing: "Warehousing",
                news: "News"
            },
            blog: {
                blogTitle1: "New Logistics Center Launched",
                blogDesc1: "New opportunities have opened in the Central Asian market for efficient logistics and freight services.",

                blogTitle2: "Our Quality System Updated",
                blogDesc2: "Service quality has been significantly enhanced and optimized to maximize customer satisfaction.",

                blogTitle3: "Our Transport Fleet Expanded",
                blogDesc3: "New vehicles have been acquired to improve the efficiency and reliability of our transport operations."
            },
            about: {
                about1: "About Us",
                about2: "Since 2018, Bonavon-2018 has been successfully providing a wide range of services in logistics and freight transportation, ensuring reliable and timely delivery for its clients.",
            },
            services: {
                service_storage: "We provide modern warehouse facilities for storing your goods. Our warehouses are equipped with advanced security and climate control systems to ensure the safety of your property under any conditions. We offer flexible rental terms and a wide range of additional services such as inventory management, labeling, and order picking. Our specialists are always ready to help you find the best solution for your business.",
                service_logistics: "Our company offers comprehensive logistics solutions that optimize supply chains and ensure timely cargo delivery. We develop customized logistics strategies considering all aspects of your business, allowing you to focus on growth rather than transportation issues. Our specialists use modern technologies to monitor and manage cargo flows, providing high-level service and minimizing costs.",
                service_cargo: "Our company specializes in the transportation of goods of any type and size. We offer transportation that takes into account all the requirements and characteristics of your cargo, whether it is oversized, hazardous, or temperature-sensitive. We ensure reliable packaging and cargo insurance, as well as prompt preparation of all necessary documents. With our services, you can be confident in the safety and timely delivery of your cargo anywhere in the world.",
                service_road_transport: "We provide road transportation services throughout the country and beyond. Our fleet consists of modern vehicles that meet all safety and environmental standards. We guarantee timely delivery of cargo regardless of its volume and destination. Our drivers have extensive experience and high qualifications, enabling us to provide top-level transportation services.",
                service_packaging: "We offer professional cargo packaging services, ensuring the safety of goods throughout the entire journey. Our company uses only high-quality materials and modern packaging technologies, protecting goods from any damage. We consider all the specifics of your cargo and select the optimal packaging method, whether boxes, pallets, or specialized containers. Entrusting us with packaging guarantees the integrity of your cargo.",
                service_warehousing: "Our warehousing services include not only storage but also a full range of logistics operations such as sorting, order picking, and delivery. We have modern warehouses with various storage conditions, allowing us to handle a wide range of goods. We offer individual solutions for each client, ensuring maximum efficiency and minimal order fulfillment times. With us, your property is always in safe hands.",
            },
            whyUs: {
                whyWe: "Why exactly us?",
                why_main: "We offer fast, safe, and efficient logistics services. Through modern technologies, highly experienced specialists, and strict quality control, we fully meet the needs of our clients. Every shipment is handled under careful supervision, with trust and professionalism.",
                security: "Security",
                why_security: "During each transportation process, your cargo remains under strict control and high safety measures. Security is our top priority.",
                fast_delivering: "Fast Delivering",
                why_fast_delivery: "Our fast and efficient delivery services are aimed at saving our clients’ time and ensuring timely delivery of shipments.",
                flexible_pricing: "Flexible Pricing",
                why_flexible_pricing: "We offer a flexible pricing policy based on the volume, type of cargo, and delivery distance. An individual approach to each client is the foundation of our service."
            },
            main: {
                main_title: "Bonavon-2018 – Reliable Partner",
                main_description: "We offer our clients a wide range of reliable and efficient services in the field of international freight transportation and logistics. Every shipment is delivered with guaranteed safety, speed, and high quality."
            },
            guarantee: {
                title: "Quality Guarantee",
                description: "Every shipment we handle is monitored under a strict guarantee of high-quality service. Our goal is to provide reliable and consistent customer service. Modern technologies and a skilled team of professionals work to ensure the safety of your cargo. We strictly adhere to quality and safety standards at every stage, so when you partner with us, you can be confident that your shipment will arrive on time and in perfect condition."

            },
            fast_delivery: {
                title: "Fast and Reliable Delivery",
                description: "We always ensure our customers receive their shipments in the shortest possible time and with full safety. Speed and reliability are the key strengths of our service. Each shipment is carefully tracked so your goods arrive on time and intact. Modern vehicles and skilled staff always prioritize your interests."

            },
            contact: "Contact us to place an order",
            footer: {
                description: "Bonavon-2018 is your reliable logistics and cargo partner with quality and speed guarantees.",
                services: "Services",
                company: "Company",
                contact_us: "Contact Us",
                address: "Dushanbe, Tajikistan",
                contact: "Contact",
                fast_delivery: "Fast and Reliable Delivery",
                guarantee: "Quality Guarantee",
                rights: "All rights reserved.",
                why_us: "Why Us",
                blog: "Blog",
                navigation: "Navigation",
            },
        },

    },
    ru: {
        translation: {
            common: {
                home: "Главная",
                about: "О Нас",
                services: "Услуги",
                blog: "Блог",
                order: "Оформить Заказ",
                contactUs: "Связаться с нами",
                submit: "Отправить",
                name: "Ваше Имя",
                email: "Ваш Email",
                message: "Ваше Сообщение",
                phone: "Телефон",
                section_1_text: "Качественный логистичный услуга",
                our_services: "Наши услуги",
                sklad: "Хранилище",
                logistics: "Логистика",
                news: "Новости",
                cargo: "Груз",
                road_transport: "Автомобильный транспорт",
                packaging: "Упаковка",
                warehousing: "Складирование",
            },
            blog: {
                blogTitle1: "Новый логистический центр запущен",
                blogDesc1: "В центральноазиатском рынке открылись новые возможности для эффективной логистики и грузоперевозок.",

                blogTitle2: "Обновлена наша система качества",
                blogDesc2: "Качество услуг было значительно улучшено и оптимизировано для максимального удовлетворения клиентов.",

                blogTitle3: "Расширен наш автопарк",
                blogDesc3: "Были приобретены новые транспортные средства для повышения эффективности и надежности перевозок."
            },
            about: {
                about1: "О нас",
                about2: "Компания Bonavon-2018 с 2018 года успешно предоставляет широкий спектр услуг в сфере логистики и грузоперевозок, обеспечивая надёжную и своевременную доставку для своих клиентов.",
            },
            services: {
                service_storage: "Мы предоставляем современные складские помещения для хранения ваших товаров. Наши склады оснащены передовыми системами безопасности и климат-контроля, что гарантирует сохранность вашего имущества в любых условиях. Мы предлагаем гибкие условия аренды и широкий спектр дополнительных услуг, таких как управление запасами, маркировка и комплектация заказов. Наши специалисты всегда готовы помочь вам с выбором оптимального решения для вашего бизнеса.",
                service_logistics: "Наша компания предлагает комплексные логистические решения, которые позволяют оптимизировать цепочки поставок и обеспечить своевременную доставку грузов. Мы разрабатываем индивидуальные логистические стратегии, учитывая все особенности вашего бизнеса, чтобы вы могли сосредоточиться на развитии, а не на транспортных проблемах. Наши специалисты используют современные технологии для отслеживания и управления грузопотоками, обеспечивая высокий уровень сервиса и минимизацию затрат.",
                service_cargo: "Наша компания специализируется на перевозке грузов любых видов и размеров. Мы предлагаем транспортировку с учетом всех требований и особенностей вашего груза, будь то негабаритные, опасные или температурно-зависимые товары. Мы обеспечиваем надежную упаковку и страхование груза, а также оперативное оформление всех необходимых документов. Наши услуги позволяют вам быть уверенными в сохранности и своевременной доставке вашего груза в любую точку мира.",
                service_road_transport: "Мы предоставляем услуги автоперевозок по всей территории страны и за её пределами. Наш автопарк состоит из современных транспортных средств, соответствующих всем требованиям безопасности и экологическим стандартам. Мы гарантируем своевременную доставку грузов, независимо от их объема и назначения. Наши водители имеют богатый опыт и высокую квалификацию, что позволяет нам осуществлять перевозки на высшем уровне.",
                service_packaging: "Мы предлагаем профессиональные услуги по упаковке грузов, обеспечивая их сохранность на протяжении всего пути следования. Наша компания использует только высококачественные материалы и современные технологии упаковки, что позволяет защитить товары от любых повреждений. Мы учитываем все особенности вашего груза и подбираем оптимальный способ упаковки, будь то коробки, паллеты или специализированная тара. Доверив нам упаковку, вы можете быть уверены в целостности вашего груза.",
                service_warehousing: "Наши складские услуги включают не только хранение, но и полный спектр логистических операций, таких как сортировка, комплектация и доставка товаров. Мы располагаем современными складами с различными условиями хранения, что позволяет нам работать с широким ассортиментом товаров. Мы предлагаем индивидуальные решения для каждого клиента, обеспечивая максимальную эффективность и минимальные сроки выполнения заказов. С нами ваше имущество всегда в надежных руках.",
            },
            whyUs: {
                whyWe: "Почему именно мы?",
                why_main: "Мы предлагаем быстрые, безопасные и эффективные логистические услуги. Благодаря современным технологиям, высококвалифицированным специалистам и строгому контролю качества, мы полностью удовлетворяем потребности наших клиентов. Каждая отправка осуществляется под тщательным контролем, с доверием и профессионализмом.",
                security: "Безопасность",
                why_security: "Во время каждой перевозки ваши грузы находятся под строгим контролем и высокими мерами безопасности. Безопасность — наш главный приоритет.",
                fast_delivering: "Быстрая доставка",
                why_fast_delivery: "Наши быстрые и эффективные услуги доставки направлены на экономию времени наших клиентов и обеспечение своевременной доставки грузов.",
                flexible_pricing: "Гибкие цены",
                why_flexible_pricing: "Мы предлагаем гибкую ценовую политику в зависимости от объема, типа груза и расстояния доставки. Индивидуальный подход к каждому клиенту — основа нашей работы."
            },
            main: {
                main_title: "Bonavon-2018 – Надежный партнер",
                main_description: "Мы предлагаем нашим клиентам широкий спектр надежных и эффективных услуг в области международных грузоперевозок и логистики. Каждая отправка осуществляется с гарантией безопасности, оперативности и высокого качества."
            },
            guarantee: {
                title: "Гарантия Качества",
                description: "Каждая наша отправляемая грузовая партия контролируется под строгой гарантией высокого качества обслуживания. Наша цель — обеспечить надежное и стабильное обслуживание клиентов. Для безопасности ваших грузов работают современные технологии и команда квалифицированных специалистов. Мы строго соблюдаем стандарты качества и безопасности на каждом этапе, поэтому, сотрудничая с нами, вы можете быть уверены, что ваш груз будет доставлен вовремя и в надлежащем состоянии."

            },
            fast_delivery: {
                title: "Быстрая и Надежная Доставка",
                description: "Мы всегда обеспечиваем нашим клиентам доставку в самые короткие сроки и с полной безопасностью. Скорость и надежность — главные преимущества наших услуг. Каждая отправка внимательно отслеживается, чтобы ваши товары прибыли вовремя и в целости. Современный автопарк и квалифицированный персонал всегда ставят ваши интересы на первое место."

            },
            contact: "Свяжитесь с нами, чтобы оформить заказ.",
            footer: {
                description: "Bonavon-2018 — ваш надежный партнер в области логистики и перевозок с гарантией качества и скорости.",
                services: "Услуги",
                company: "Компания",
                contact_us: "Контакты",
                address: "Ташкент, Узбекистан",
                contact: "Контакт",
                fast_delivery: "Быстрая и надежная доставка",
                guarantee: "Гарантия качества",
                rights: "Все права защищены.",
                why_us: "Почему мы",
                blog: "Блог",
                navigation: "Навигация"
            },
        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

export default i18n;
