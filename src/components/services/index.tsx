import React from 'react';
import { Service } from '@/types';

const CommonService: React.FC<Service> = ({ data }) => {
  return (
    <div className="font-figtree my-10">
      {data?.map((dataItem: any, index) => (
        <React.Fragment key={index}>
          {dataItem?.title && index < data?.length - 2 ? <p className="mb-2 font-bold">{dataItem?.title}</p> : null}
          {dataItem?.subtitle && index < data?.length - 2 ? <p className="mb-5">{dataItem?.subtitle}</p> : null}
          {dataItem?.listItems ? (
            <ul className="mb-10 list-none pl-10 sm:pl-4">
              {dataItem.listItems.map((item: any, itemIndex: number) => (
                <li key={itemIndex} className="mt-2">
                  <p>
                    <span className="font-primary font-bold">{item?.itemHeading}</span> {item?.itemContent}
                  </p>
                </li>
              ))}
            </ul>
          ) : null}
          {index === data?.length - 2 ? (
            <>
              <p className="mb-2 font-bold">{dataItem?.title}</p>
              <p className="mb-5">{dataItem.subtitle}</p>
            </>
          ) : null}
          {index === data?.length - 1 ? <p>{dataItem.subtitle}</p> : null}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CommonService;
