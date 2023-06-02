import { useCallback, useRef } from 'react';

export const useInfiniteLoading = (
  loading: boolean,
  fetchMore: () => void,
  hasMore: boolean
) => {
  const observer = useRef<IntersectionObserver>();

  return useCallback(
    (node: any) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          // setLoadingMore(true);
          console.log('b');

          fetchMore();
        } else {
          // setLoadingMore(false);
        }
      });

      if (node) {
        observer.current!.observe(node);
      }

      console.log(node);
    },
    [fetchMore, hasMore, loading]
  );
};
