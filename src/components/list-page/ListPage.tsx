import React, { LegacyRef, useCallback, useRef, useState } from 'react';
import { useInfiniteLoading } from '../../hooks/useInfiniteLoading';

interface ListPageProps<T> {
  items: T[];
  renderItems: (item: T, ref?: LegacyRef<HTMLDivElement>) => React.ReactNode;
  className?: string;
  hasMore: boolean;
  loading: boolean;
  fetchMore: () => void;
}

const ListPage = <T,>({
  items,
  renderItems,
  loading,
  className,
  hasMore,
  fetchMore,
}: ListPageProps<T>) => {
  const observer = useRef<IntersectionObserver>();

  console.log(observer);

  const [loadingMore] = useState(hasMore);

  const lastElementRef = useInfiniteLoading(loading, fetchMore, hasMore);

  return (
    <div
      className={
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 items-stretch gap-x-5 gap-y-28 mt-32 ' +
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
      {loadingMore && <div>Loading...</div>}
    </div>
  );
};

export default ListPage;
