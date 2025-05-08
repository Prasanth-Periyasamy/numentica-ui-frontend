'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
type AdditionalProps = {
  data?: [];
  paragraphStyles?: string;
  linkStyles?: string;
  listStyles?: string;
  listItemStyles?: string;
  imageStyles?: string;
  headingStyles?: string;
  boldStyles?: string;
  target?: string;
};
const RichText: React.FC<AdditionalProps> = ({
  data,
  paragraphStyles,
  linkStyles,
  listStyles,
  listItemStyles,
  imageStyles,
  headingStyles,
  boldStyles,
}) => {
  const content: BlocksContent = data || [];
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: (props) => <p className={paragraphStyles}>{props.children}</p>,
        link: (props) => (
          <Link target="_blank" className={`${linkStyles}  underline underline-offset-2`} href={props.url}>
            {props.children}
          </Link>
        ),
        list: (props) => {
          if (props.format === 'ordered') {
            return <ol className={`list-decimal ${listStyles}`}>{props.children}</ol>;
          }
          return <ul className={`list-disc ${listStyles}`}>{props.children}</ul>;
        },
        'list-item': (props) => <li className={listItemStyles}>{props.children}</li>,
        image: (props) => (
          <div className="h-58 w-full object-fill py-5">
            <Image
              className={imageStyles}
              src={props.image.url}
              alt={props.image.alternativeText || ''}
              width={1000}
              height={360}
            />
          </div>
        ),
        heading: (props) => {
          switch (props.level) {
            case 1:
              return <h1 className={headingStyles}>{props.children}</h1>;
            case 2:
              return <h2 className={headingStyles}>{props.children}</h2>;
            case 3:
              return <h3 className={headingStyles}>{props.children}</h3>;
            case 4:
              return <h4 className={headingStyles}>{props.children}</h4>;
            case 5:
              return <h5 className={headingStyles}>{props.children}</h5>;
            case 6:
              return <h6 className={headingStyles}>{props.children}</h6>;
            default:
              return <h1 className={headingStyles}>{props.children}</h1>;
          }
        },
      }}
      modifiers={{
        bold: (props) =>
          boldStyles ? <strong className={boldStyles}>{props.children}</strong> : <strong>{props.children}</strong>,
      }}
    />
  );
};
export default RichText;
