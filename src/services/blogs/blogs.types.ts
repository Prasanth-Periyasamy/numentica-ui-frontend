import { MediaAttributes, TitleWithDescription } from '../common.types';

export type BlogsDataType = {
  mainBlog?: BlogsPageType;
};

export type BlogsPageType = {
  title?: string;
  blogs?: {
    documentId?: string;
    title?: string;
    description?: string;
    blogger?: string;
    blogDate?: string;
    blogId?: string;
    createdAt?: string;
    updatedAt?: string;
    bloggerPhoto?: MediaAttributes;
    blogImage?: MediaAttributes;
  }[];
};

export type UniqueBlogDataType = {
  blog?: UniqueBlogPageType;
};

export type UniqueBlogPageType = {
  documentId?: string;
  title?: string;
  description?: string;
  blogger?: string;
  blogDate?: string;
  blogId?: string;
  blogContent?: TitleWithDescription[];
  bloggerPhoto?: MediaAttributes;
  blogImage?: MediaAttributes;
};

export type BlogSlugsType = {
  blogs?: {
    documentId?: string;
  }[];
};
