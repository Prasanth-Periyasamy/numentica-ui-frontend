import { BlogsDataType, BlogSlugsType, UniqueBlogDataType } from '@/services/blogs/blogs.types';

export const getAllBlogsModel = ({ mainBlog = {} }: BlogsDataType) => {
  const { title, blogs } = mainBlog || {};
  return { title, blogs };
};

export const getUniqueBlogModel = ({ blog = {} }: UniqueBlogDataType) => {
  const { blogContent, blogDate, blogId, blogImage, blogger, bloggerPhoto, description, documentId, title } =
    blog || {};
  return { blogContent, blogDate, blogId, blogImage, blogger, bloggerPhoto, description, documentId, title };
};

export const getBlogSlugsModel = ({ blogs }: BlogSlugsType) => {
  const data = blogs || [];
  return {
    data,
  };
};
