import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';
import Hotjar from '@/components/hotjar';
import { ServiceWrapper } from '@/context/serviceContext';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { footerService, headerService } from '@/services';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Numentica UI',
  description:
    'Numentica UI specializes in cutting-edge UI/UX, robust cloud solutions, streamlined CMS, and rigorous quality assurance. Elevate your digital presence with our expertise, transforming ideas into exceptional web and mobile experiences.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerData = await headerService.getHeaderData();
  const footerData = await footerService.getFooterData();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <Header header={headerData} />
        <ServiceWrapper>{children}</ServiceWrapper>
        <Footer footer={footerData} />
        <Hotjar />
        <GoogleAnalytics gaId="G-3LG8HG56XL" />
      </body>
    </html>
  );
}
