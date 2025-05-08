import { LinkWithSlug } from '@/services/common.types';

// NavLinks
export interface NavigationLink {
  id?: string;
  link?: string;
  slug?: string;
}

export interface NavLink {
  link: LinkWithSlug;
  pathname?: string;
  children?: React.ReactNode;
}

// Common Button
export interface ButtonProps {
  className?: string;
  btnName: string;
  type?: string;
  handleClick?: () => void;
}

// Footer social media icons
export interface SocialMediaData {
  id: number;
  src: string;
  alt: string;
  url: string;
  hoverSrc: string;
}

// Team
export interface TeamData {
  id: number;
  title: string;
  content: string;
}

// Get in touch
export interface GetInTouchProps {
  content: string;
  name: string;
}

// Services
export interface ServicesData {
  id: number;
  img: string;
  title: string;
}

// Slide btn
export interface SlideBtn {
  name: string;
  direction: string;
  arrow: string;
  onClickHandler?: (direction: string) => void;
}

// aura content
export interface AuraContent {
  id: number;
  text: string;
  title: string;
}

// Service json
interface ServiceItem {
  title?: string;
  subtitle?: string;
  listItems?: {
    itemHeading: string;
    itemContent: string;
  }[];
}

export interface Service {
  data: ServiceItem[];
}

// Swiper
export interface SwiperInstance {
  slides: Element[];
  activeIndex: number;
  realIndex: number;
}

// Animated Image
export interface AnimatedImageProps {
  src: string;
  alt: string;
}
