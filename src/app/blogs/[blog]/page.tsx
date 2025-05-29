import BlogDetail from '@/components/blog/BlogDetail';
import { apiUrl } from '@/config';
import { blogService } from '@/services';
import Image from 'next/image';

export async function generateStaticParams() {
  const { data } = await blogService?.getBlogsSlugData();
  const paths = data?.map((data) => ({ blog: data?.documentId?.toLowerCase() }));
  return paths?.length ? paths : [{ blog: ' ' }];
}

const Blog = async ({ params }: { params: { blog: string } }) => {
  const { blogContent, blogImage, description, title } = await blogService?.getUniqueBlogData(
    params?.blog?.toLowerCase(),
  );
  return (
    <div className="mx-auto max-w-350 px-4">
      <section className="mt-10">
        <h1 className="text-center font-secondary font-normal">{title}</h1>
        <p className="mb-10 text-center font-primary text-[20px]">{description}</p>
        <div className="h-80">
          <Image
            className="object-cover"
            src={`${apiUrl}${blogImage?.url}`}
            alt={blogImage?.alternativeText || ''}
            width={10}
            height={10}
          />
        </div>
      </section>
      <BlogDetail blogContent={blogContent} title={title} description={description} />
    </div>
  );
};

export default Blog;
