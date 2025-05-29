'use client';
import React, { useEffect, useRef, useState } from 'react';
import RichText from '../richText';
import { TitleWithDescription } from '@/services/common.types';
import Image from 'next/image';
import { facebook, instagram, linkedin } from '@/utils/imageConstants';

type BlogDetailProps = {
  blogContent?: TitleWithDescription[];
  title?: string;
  description?: string;
};

const BlogDetail = ({ blogContent, title, description }: BlogDetailProps) => {
  const [activeId, setActiveId] = useState<string>();
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    blogContent?.forEach((blog) => {
      const id = `section-${blog?.id}`;
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [blogContent]);

  return (
    <section className="my-10 grid grid-cols-[35%_62%] gap-2 lg:grid-cols-1">
      <div className="space-y-4 lg:order-2">
        {blogContent?.map((blog) => {
          const id = `section-${blog?.id}`;
          const isActive = activeId === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`block cursor-pointer border-l-2 pl-2 font-secondary text-[16px] lg:hidden ${
                isActive ? 'border-black font-semibold text-black' : 'border-transparent text-gray-500'
              }`}
            >
              {blog.title}
            </a>
          );
        })}

        <h4 className="mt-[60px] font-primary text-lg font-medium">Share Article</h4>
        <div className="flex size-[30px] items-center gap-3">
          <Image src={facebook} alt="facebook" />
          <Image src={linkedin} alt="linkedin" />
          <Image src={instagram} alt="instagram" />
        </div>
      </div>

      <div className="space-y-10">
        {blogContent?.map((blog) => {
          const id = `section-${blog?.id}`;
          return (
            <div
              key={id}
              id={id}
              ref={(el) => {
                sectionRefs.current[id] = el;
              }}
            >
              <h3 className="font-secondary text-[20px] font-semibold">{blog.title}</h3>
              <RichText data={blog.description} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogDetail;
