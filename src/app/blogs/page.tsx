import { apiUrl } from '@/config';
import { getAllBlogsData } from '@/services/blogs/blogs.services';
import Image from 'next/image';
import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const Blogs = async () => {
  const { title, blogs } = await getAllBlogsData();
  return (
    <main className="m-auto mb-14 flex max-w-350 gap-5 px-4 pt-10">
      <section className="flex-1">
        <h1 className="border-b border-solid pb-8 font-secondary capitalize">{title}</h1>
        <div className="flex flex-col gap-4 divide-y">
          {blogs?.map((blog) => {
            const { blogId, title, description, blogDate, blogger, bloggerPhoto, blogImage, documentId } = blog;
            const { alternativeText = '', url } = bloggerPhoto || {};
            return (
              <Link href={documentId || ''} key={blogId} className="flex gap-4 pt-4">
                <div className="">
                  <Image
                    src={`${apiUrl}${blogImage?.url || ''}`}
                    alt={alternativeText}
                    className="h-[200px] w-[730px] object-cover"
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
              </Link>
            );
          })}
        </div>
      </section>
      <section className="lg:hidden">
        <h1 className="border-b border-solid pb-8 font-secondary capitalize">Top Posts</h1>
        <div className="flex flex-col gap-4 divide-y">
          {blogs?.map((blog) => {
            const { title, blogImage, documentId } = blog || {};
            return (
              <div key={documentId} className="flex items-center gap-4 pt-4">
                <div className="size-16">
                  <Image
                    src={`${apiUrl}${blogImage?.url}`}
                    alt={blogImage?.alternativeText || ''}
                    className="object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{title}</h2>
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
