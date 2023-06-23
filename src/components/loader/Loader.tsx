import React from 'react';
import Icon from '../../assets/icons/Icon';

const Loader = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Icon
        name="pokeball"
        className="fill-slate-300 w-28 mx-auto animate-spin"
      />
    </div>
  );
};

export default Loader;
