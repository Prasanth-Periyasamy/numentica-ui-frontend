'use client';
import Slider from 'react-slick';
import { MediaAttributes } from '@/services/common.types';
import { baseSettings } from '@/data/sliderBaseSettings';
import Image from 'next/image';
import RichText from '../richText';
import { apiUrl } from '@/config';

interface ClientProps {
  clientFeedback?: {
    clientName?: string;
    clientPhoto?: MediaAttributes;
    feedback?: [];
    id?: string;
  }[];
}
const settings = {
  className: 'center',
  slidesToScroll: 1,
  slideToShow: 1,
  autoplay: true,
  pauseOnHover: false,
  swipeToSlide: true,
  dots: true,
};

const Client = ({ clientFeedback }: ClientProps) => {
  return (
    <div className="mx-auto min-h-[200px] max-w-350">
      <div className="mx-auto w-[50%]">
        <Slider {...settings}>
          {clientFeedback?.map((feedback) => {
            const { clientName, clientPhoto, feedback: clientFeedback, id } = feedback || {};
            const { url = '', alternativeText = '' } = clientPhoto || {};
            return (
              <div>
                <RichText data={clientFeedback || []} paragraphStyles="color-black text-center text-black md:w-full" />
                <div className="mx-auto size-10">
                  <Image src={`${apiUrl}${url}`} alt={alternativeText} width={30} height={30} />
                </div>
                <p className="text-center">{clientName}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Client;
