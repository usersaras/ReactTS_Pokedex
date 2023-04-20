import React from 'react';

interface CenteredContainerProps {
  children: JSX.Element;
  className?: string;
}

const CenteredContainer = ({ children, className }: CenteredContainerProps) => {
  return (
    <div className={`mx-auto container ${className ? className : ''}`.trim()}>
      {children}
    </div>
  );
};

export default CenteredContainer;
