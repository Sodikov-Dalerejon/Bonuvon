import React from 'react';
import { useTranslation } from 'react-i18next';

const OurServices = () => {
    const { t } = useTranslation();

    return (
        <div>
            <section className='bg-white ms-4 ps-4'>
                <div>
                    <h2 id="services-title" className='text-center text-3xl text-bold my-6 uppercase'>{t("common.our_services")}</h2>
                </div>
                <div>
                    <div className='flex gap-5 justify-between my-5'>
                        <div>
                            <div>
                                <img className='w-[397px] h-[265px]' src="/img/Organizarea-interna-a-depozitelor-1-Axes-Software-2048x1365.jpg-1800x1200.jpg" alt="" />
                                <div>
                                    <h3 className='text-center text-2xl py-2.5 font-bold'>{t("common.sklad")}</h3>
                                    <p>{t("services.service_storage")}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <img src="/img/RWSolutions-Social-Media-Templates.png" alt="" className='w-[397px] h-[265px]' />
                                <div>
                                    <h3 className='text-center text-2xl py-2.5 font-bold'>{t("common.logistics")}</h3>
                                    <p>{t("services.service_logistics")}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <img className='w-[397px] h-[265px]' src="/img/1678728243582.jpg" alt="" />
                                <div>
                                    <h3 className='text-center text-2xl py-2.5 font-bold'>{t("common.cargo")}</h3>
                                    <p>{t("services.service_cargo")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-5 justify-between'>
                        <div>
                            <div>
                                <img className='w-[397px] h-[265px]' src="/img/truck-load-accident.jpg" alt="" />
                                <div>
                                    <h3 className='text-center text-2xl py-2.5 font-bold'>{t("common.road_transport")}</h3>
                                    <p>{t("services.service_road_transport")}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <img className='w-[397px] h-[265px]' src="./img/istockphoto-1308840409-612x612.jpg" alt="" />
                                <div>
                                    <h3 className='text-center text-2xl py-2.5 font-bold'>{t("common.packaging")}</h3>
                                    <p>{t("services.service_packaging")}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <img className='w-[397px] h-[265px]' src="/img/warehouse-shelves-building-factory-packaging-industry-2-Jan-08-2023-07-06-37-4994-PM.jpg" alt="" />
                                <div>
                                    <h3 className='text-center text-2xl py-2.5 font-bold'>{t("common.warehousing")}</h3>
                                    <p>{t("services.service_warehousing")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default OurServices;
