import { apiUrl } from '@/config';
import { getAllBlogsData } from '@/services/blogs/blogs.services';
import Image from 'next/image';
import React from 'react';
import moment from 'moment';

const Blogs = async () => {
  const { title, blogs } = await getAllBlogsData();
  return (
    <main className="m-auto mb-14 flex max-w-350 gap-5 px-[90px] pt-10 lg:px-8 sm:px-2">
      <section className="flex-1">
        <h1 className="border-b border-solid pb-8 font-secondary capitalize">{title}</h1>
        <div className="flex flex-col gap-4 divide-y">
          {blogs?.map((blog) => {
            const { blogId, title, description, blogDate, blogger, bloggerPhoto } = blog;
            const { alternativeText = '', url } = bloggerPhoto || {};
            return (
              <div key={blogId} className="flex gap-4 pt-4">
                <div className="">
                  <Image
                    src={`${apiUrl}${url}`}
                    alt={alternativeText}
                    className="h-[200px] w-[730px]"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 border-r border-solid border-black pr-2">
                      <div className="flex size-9 items-center justify-center overflow-hidden rounded-full">
                        <Image
                          src={`${apiUrl}${url}`}
                          alt={alternativeText}
                          className="object-cover"
                          width={36}
                          height={36}
                        />
                      </div>
                      <p>{blogger}</p>
                    </div>
                    <p>{moment(blogDate).format('Do MMM YYYY')}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <h1 className="border-b border-solid pb-4 font-secondary capitalize">Top Posts</h1>
        <div className="flex flex-col gap-4 divide-y">
          {blogs?.map((blog) => {
            const { blogId, title, bloggerPhoto } = blog;
            const { alternativeText = '', url } = bloggerPhoto || {};
            return (
              <div key={blogId} className="flex items-center gap-4 pt-4">
                <div className="size-16">
                  <Image
                    src={`${apiUrl}${url}`}
                    alt={alternativeText}
                    className="object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h2 className="text-[20px] font-semibold">{title}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Blogs;
