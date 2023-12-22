import React, { LegacyRef, useCallback, useRef, useState } from 'react';
import { useInfiniteLoading } from '../../hooks/useInfiniteLoading';
import Loader from '../loader/Loader';

interface ListPageProps<T> {
  items: T[];
  renderItems: (item: T, ref?: LegacyRef<HTMLDivElement>) => React.ReactNode;
  className?: string;
  hasMore: boolean;
  loading: boolean;
  fetchMore: () => void;
  lastElementRef: (node: any) => void;
}

const ListPage = <T,>({
  items,
  renderItems,
  loading,
  className,
  hasMore,
  fetchMore,
  lastElementRef,
}: ListPageProps<T>) => {
  const [loadingMore] = useState(hasMore);

  return (
    <>
      <div
        className={
          'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 items-stretch gap-x-5 gap-y-28 mt-32 pb-12' +
          className
        }
      >
        {items.map((item, index) => {
          if (items.length === index + 1) {
            return renderItems(item, lastElementRef);
          } else {
            return renderItems(item);
          }
        })}
      </div>
    </>
  );
};

export default ListPage;
