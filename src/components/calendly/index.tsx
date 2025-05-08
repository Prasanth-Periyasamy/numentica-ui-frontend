import { useEffect } from 'react';

const CalendlyWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div
        className="calendly-inline-widget mt-[5%] flex h-[100%] items-center justify-center md:mt-[10%]"
        data-url={process.env.NEXT_PUBLIC_CALENDLY_URL || ''}
      ></div>
    </>
  );
};

export default CalendlyWidget;
