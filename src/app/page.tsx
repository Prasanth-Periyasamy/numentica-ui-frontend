'use client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/button/page';
import Modal from '@mui/material/Modal';
import { founder, map, numenticaHomeTeam, strapiLogo } from '../utils/imageConstants';
import { services } from '../data/services';
import Slider from 'react-slick';
import GetInTouch from '@/components/getInTouch';
import { ServicesData } from '@/types';
import { motion, useInView } from 'framer-motion';
import { baseSettings } from '@/data/sliderBaseSettings';
import { useServiceContext } from '@/context/serviceContext';
import { AnimatedElement } from '@/components/animatedElement';
import Link from 'next/link';
import CalendlyWidget from '@/components/calendly';
import './style.css';
import ContactUs from '@/components/contactusForm';

const settings = {
  ...baseSettings,
  className: 'center',
  speed: 3000,
  autoplaySpeed: 3000,
  autoplay: true,
  pauseOnHover: false,
  swipeToSlide: true,
};

const charVariants: any = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const Home = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });
  const router = useRouter();

  const { setTitle, setIndex } = useServiceContext();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById('video') as HTMLVideoElement;
    if (videoElement) {
      videoElement.pause();
      videoElement.removeAttribute('src'); // empty source
      videoElement.load();
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="pb-20 pt-112px lg:pb-0 lg:pt-20 xs:pt-7">
      <div className="px-134px lg:px-7">
        <motion.h1
          initial="hidden"
          animate={isInView ? 'reveal' : 'hidden'}
          transition={{ staggerChildren: 0.02 }}
          ref={headingRef}
          className="4xl:w- m-auto min-h-[90px] w-3/4 whitespace-normal  text-center leading-tight text-black 3xl:w-2/5 2xl:w-70% lg:w-90% md:w-full  xs:min-h-[160px]"
        >
          {'Transforming Visions Into Reality: Precision and Innovation at Every Step for Funded Startups'
            .split('')
            .map((char, index) => (
              <motion.span key={`${char}${index}`} transition={{ duration: 1 }} variants={charVariants}>
                {char}
              </motion.span>
            ))}
        </motion.h1>
        <p className="color-black m-auto  my-10 w-83% text-center text-black md:my-6 md:w-full">
          At Numentica UI, you bring the vision, and we bring it to life, ensuring every facet of your product resonates
          with quality, innovation, and market relevance.
        </p>
        <h5 className="text-center font-primary font-bold sm:font-medium">Let us build the future together.</h5>
        <div className="mt-7 flex h-full w-full items-center justify-center gap-4 xs:flex-wrap">
          <Button btnName="Get started" type="secondary" handleClick={() => scrollToElement('your-vision')} />
          <Button handleClick={handleOpen} btnName="Schedule a call" />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="backdropStyle"
          >
            <div className="modalContainerStyle">
              <button className="closeButtonStyle" onClick={handleClose}>
                &times;
              </button>
              <CalendlyWidget />
            </div>
          </Modal>
        </div>
        {/* New Section */}
        <section className="mt-16 flex items-center justify-center gap-24 rounded-md bg-[#F6F6F6] pb-8 pt-5">
          <div className="text-left">
            <h3 className="mb-1 leading-normal text-black md:hidden">Proud Partner of Strapi</h3>
            <p className="mb-2">
              Powered by Strapi, we deliver fast, flexible, and
              <span className="block">scalable content solutions tailored to your needs.</span>
            </p>
            <Button handleClick={handleOpen} btnName="Book a Demo" />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              className="backdropStyle"
            >
              <div className="modalContainerStyle">
                <button className="closeButtonStyle" onClick={handleClose}>
                  &times;
                </button>
                <CalendlyWidget />
              </div>
            </Modal>
          </div>
          <div className="h-[160px] w-[160px] overflow-hidden">
            <Link href="https://strapi.io/" target="_blank">
              <Image src={strapiLogo} alt="Strapi Logo" />
            </Link>
          </div>
        </section>
        <AnimatedElement>
          <div className="mx-auto max-w-[1536px]">
            <video
              id="video"
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              className="my-16 rounded-md !border-none !outline-none sm:my-8"
            >
              <source src="NUIPromo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </AnimatedElement>
        <AnimatedElement>
          <h2 id="your-vision" className="text-center text-black md:text-[24px]">
            Your Vision. Our Execution.
          </h2>
          <p className="my-11 text-center sm:my-9">
            We transform digital landscapes. Our suite of solutions is designed to revolutionize the way funded startups
            interact with technology, ensuring they stay ahead in a fast-evolving digital world. Discover our
            comprehensive range of services tailored to meet your unique needs:
          </p>
        </AnimatedElement>
        <AnimatedElement>
          <div className="w-full cursor-pointer">
            <Slider {...settings}>
              {services.map((data: ServicesData, index) => (
                <div
                  className={`h-250px flex-grow border border-solid border-servicesBorder px-5 py-11
             `}
                  onClick={() => {
                    setTitle(data?.title);
                    setIndex(index);
                    router.push(`/solutions/#${data?.title}`);
                  }}
                  key={data?.id}
                >
                  <div className="h-70px w-70px">
                    <Image src={data?.img} alt={data?.title} width={70} height={70} />
                  </div>
                  <h5 className="mt-5">{data?.title}</h5>
                </div>
              ))}
            </Slider>
          </div>
        </AnimatedElement>
      </div>
      <AnimatedElement>
        <div className="my-20 flex items-center justify-end gap-10 px-134px lg:px-0 md:mb-0">
          <h2 className="text-black md:hidden">Team</h2>
          <div className="relative flex h-314px w-78% flex-col justify-end md:mb-[270px] md:w-full xs:mb-[340px]">
            <Image src={numenticaHomeTeam} alt="team discussion" className="rounded-xl object-cover md:rounded-none" />
            <div className="absolute left-0 top-[12%] flex  w-400px flex-col gap-4 rounded-r-xl bg-white py-8 pl-8 pr-8 md:left-5.5% md:top-90% md:w-90% md:rounded-xl md:pl-8">
              <p className="text-black">
                At Numentica UI, our strength lies in our team. A vibrant collective of creative minds, technical
                wizards, and strategic thinkers, we are united by our passion for crafting exceptional user experiences.
              </p>
              <Link href="/team">
                <Button btnName="Learn More" type="secondary" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedElement>
      <div className="px-134px lg:px-7">
        <AnimatedElement>
          <GetInTouch
            content="Unleash your digital potential with Numentica UI - Start your transformation journey today!"
            name="Get in touch with us"
          />
        </AnimatedElement>
        <AnimatedElement>
          <h2 className="mt-20 text-center text-black">Global Footprint</h2>
          <div className="mb-50px mt-10 w-full">
            <Image src={map} alt="global footprints" />
          </div>
        </AnimatedElement>
      </div>
    </main>
  );
};

export default Home;
