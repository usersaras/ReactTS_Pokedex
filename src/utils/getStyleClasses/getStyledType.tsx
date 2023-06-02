import React from 'react';

const getStyledType = (type: string, key: number) => {
  const classes = ' rounded-full px-4 text-sm py-2';

  switch (type) {
    case 'grass':
      return (
        <p key={key} className={'bg-grass' + classes}>
          {type}
        </p>
      );
    default:
      return (
        <p key={key} className={'bg-slate-200' + classes}>
          {type}
        </p>
      );
  }
};

export default getStyledType;
