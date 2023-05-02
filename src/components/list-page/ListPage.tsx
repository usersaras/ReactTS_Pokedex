import React from 'react';

interface ListPageProps<T> {
  items: T[];
  renderItems: (item: T) => React.ReactNode;
}

const ListPage = <T,>({ items, renderItems }: ListPageProps<T>) => {
  console.log(items);

  return (
    <div className="grid grid-cols-3 gap-5">
      {items.map((item) => {
        return renderItems(item);
      })}
    </div>
  );
};

export default ListPage;
