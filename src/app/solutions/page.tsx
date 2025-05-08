'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { auraLogo, dummyImg, leftArrow, rightArrow } from '../../utils/imageConstants';
import { ServicesData, SlideBtn, SwiperInstance } from '@/types';
import { services } from '../../data/services';
import { auraContent } from '@/data/auraContent';
import CommonService from '@/components/services';
import {
  brandXperienceEngineering,
  applicationRevitalization,
  cmsEngineering,
  continuousDelivery,
  modularEngineering,
  multiPlatformEngineering,
} from '../../data/servicesData';
import GetInTouch from '@/components/getInTouch';
import { motion } from 'framer-motion';
import { baseSettings } from '@/data/sliderBaseSettings';
import { useServiceContext } from '@/context/serviceContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const dataMap: Record<string, any> = {
  'Application Revitalization': applicationRevitalization,
  'CMS Engineering': cmsEngineering,
  'BrandXperience Engineering': brandXperienceEngineering,
  'Modular Engineering': modularEngineering,
  'Multi-Platform Engineering': multiPlatformEngineering,
  'Continuous Delivery as a Service': continuousDelivery,
};

const SlideArrow: React.FC<SlideBtn> = ({ name, direction, arrow, onClickHandler }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 50, damping: 10 }}
      name={name}
      onClick={() => onClickHandler?.(direction)}
      className={`border border-solid border-[#C1EAFF] px-3 sm:hidden ${
        direction === 'left' ? 'rounded-bl-2xl rounded-tl-2xl' : 'rounded-br-2xl rounded-tr-2xl'
      } get-started-btn mr-[1px]`}
    >
      <div className="h-2.5 w-2.5">
        <Image src={arrow} alt={name} width={10} height={10} />
      </div>
    </motion.button>
  );
};

const Solutions = () => {
  const sliderRef: any = React.useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [service, setService] = useState(Object.keys(dataMap)[0]);

  const { title, index } = useServiceContext();

  const slideChanger = (direction: string) => {
    sliderRef.current[direction === 'left' ? 'slickPrev' : 'slickNext']();
  };

  const activeSlide = (direction: string, index: number = 0, service: string, e?: any) => {
    e?.stopPropagation();
    setService(service);
    if (!direction && (index || index === 0)) {
      setActiveIndex(index);
      return;
    }
    const lastIndex = services.length - 1;
    let newIndex;
    switch (direction) {
      case 'right':
        newIndex = activeIndex < lastIndex ? activeIndex + 1 : 0;
        break;
      case 'left':
        newIndex = activeIndex > 0 ? activeIndex - 1 : lastIndex;
        break;
      default:
        return;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (title && index) {
      setService(title);
      setActiveIndex(index);
    }
  }, [title, index]);

  const settings = {
    ...baseSettings,
    swipeToSlide: true,
    pauseOnHover: false,
    focusOnSelect: true,
    initialSlide: index ? index : 0,
    nextArrow: <SlideArrow name="leftbtn" direction="left" arrow={leftArrow} onClickHandler={slideChanger} />,
    prevArrow: <SlideArrow name="rightbtn" direction="right" arrow={rightArrow} onClickHandler={slideChanger} />,
  };

  const serviceData = dataMap[service];

  const handleSlideChange = (swiper: SwiperInstance) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    setActiveIndex(swiper.realIndex);
    if (activeSlide) {
      const firstElement = activeSlide.children[0];
      if (firstElement) {
        const id = firstElement.id;
        if (id) {
          setService(id);
        }
      }
    }
  };

  return (
    <>
      {/* <div className="px-[90px] pt-10 lg:px-8 sm:px-2">
        <div className="solutions-bg relative rounded-[18px] px-[52px] py-[50px] text-white sm:px-5">
          <h1 className="text-inherit">Empower Your Digital Evolution with NUI:</h1>
          <h1 className="-mt-4 text-inherit">Elevating Experiences, Engineering Excellence!</h1>
          <p className="mt-20 text-inherit sm:mt-[50px]">
            Embark on your journey to success with us, where every service we offer is meticulously crafted to amplify
            your presence in the digital realm.
          </p>
          <p className="mt-6 text-inherit">
            At the heart of our offerings lies the
            <span className="mx-2 font-primary font-bold ">AURA Framework</span>- a robust foundation that powers all
            our services, ensuring seamless integration and unparalleled performance. Your success story begins here,
            with NUI as your trusted partner in innovation and growth.
          </p>
        </div>
      </div>
      <main className="-mb-6 px-[90px] lg:px-8">
        <div className="my-11 flex sm:hidden">
          <SlideArrow name="leftbtn" direction="left" arrow={leftArrow} onClickHandler={slideChanger} />
          <div className="w-[98%] lg:w-[90%] sm:w-full">
            <Slider {...settings} ref={sliderRef}>
              {services?.map((data: ServicesData, index) => (
                <div
                  className={`h-[250px] flex-grow cursor-pointer border   border-solid border-[#D5D5D5] pb-5 pt-11 4xl:px-10 3xl:px-10 2xl:px-5 md:px-4 ${
                    index === activeIndex ? 'colored-border' : ''
                  }`}
                  key={data?.id}
                  onClick={(e) => activeSlide('', index, data?.title, e)}
                  id={data?.title}
                >
                  <div
                    className={`${
                      index !== activeIndex ? 'transform transition-transform ease-in-out hover:scale-105' : ''
                    }`}
                  >
                    <div className="h-[70px] w-[70px] bg-white">
                      <Image src={data?.img} alt={data?.title} width={70} height={70} />
                    </div>
                    <h5 className="mt-5 bg-white">{data?.title}</h5>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <SlideArrow name="rightbtn" direction="right" arrow={rightArrow} onClickHandler={slideChanger} />
        </div>
        <div className="my-11 4xl:hidden 3xl:hidden sm:block">
          <Swiper
            initialSlide={index ? index : 0}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.5}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            loop={true}
            pagination={{ el: '', clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            onSlideChange={handleSlideChange}
            className="swiper_container"
          >
            {services?.map((data: ServicesData, index) => (
              <SwiperSlide key={data?.id}>
                <div
                  className={`h-[250px] flex-grow cursor-pointer border border-solid border-[#D5D5D5] pb-5 pt-11 4xl:px-10  3xl:px-10 2xl:px-5 ${
                    index === activeIndex ? '' : ''
                  }`}
                  key={data?.id}
                  id={data?.title}
                >
                  <div
                    className={`${
                      index !== activeIndex ? 'transform transition-transform ease-in-out hover:scale-105' : ''
                    }`}
                  >
                    <div className="h-[70px] w-[70px] bg-white">
                      <Image src={data?.img} alt={data?.title} width={70} height={70} />
                    </div>
                    <h5 className="mt-5 bg-white xs:text-[17px]">{data?.title}</h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="px-6 pt-5 md:px-0">
          <div className="flex items-center gap-10">
            <div className="h-[73px] w-[68px] md:hidden">
              <Image src={services[activeIndex]?.img} alt={services[activeIndex]?.title} width={68} height={73} />
            </div>
            <h1 className="font-semibold text-black md:text-[24px]">{services[activeIndex]?.title}</h1>
          </div>
          <div className="flex items-start gap-10">
            <div className="w-[58%] md:w-full">{serviceData ? <CommonService data={serviceData} /> : null}</div>
            <div className="h-[867px] w-[40%] flex-grow md:hidden">
              <Image src={dummyImg} alt="dummy" width={1000} height={867} />
            </div>
          </div>
          <div className="4xl:mt-14 3xl:mt-10 2xl:mt-4">
            <GetInTouch
              content={`Embrace the future with Numentica UI's ${service} Today!`}
              name="Get in touch with us"
            />
          </div>
        </div>
        <div className="bg-gradient bg-shadow mt-10 rounded-2xl px-6 py-7">
          <div className="mb-16 flex items-center gap-12 sm:mb-10 sm:flex-col sm:gap-8">
            <div className="h-[133px] w-[88px] flex-shrink-0 md:h-[102px]">
              <Image src={auraLogo} alt="aura logo" width={88} height={133} className="flex-shrink-0" />
            </div>
            <div className=" text-black sm:text-center">
              <h1 className="font-semibold">The AURA Framework by Numentica UI</h1>
              <h4 className="font-semibold">AI-Driven Efficiency and Cost Reduction for Your SDLC</h4>
            </div>
          </div>
          {auraContent?.map((item) => (
            <p key={item?.id} className="mb-6 text-black">
              {item?.title ? <span className="mr-1 font-bold after:content-[':']">{item?.title}</span> : null}
              {item?.text}
            </p>
          ))}
        </div>
      </main> */}
    </>
  );
};

export default Solutions;
