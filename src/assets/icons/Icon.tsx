import React from 'react';
import * as Icons from './Index';

type IconsObject = typeof Icons;
type IconName = keyof IconsObject;

interface IconProps {
  name: IconName;
  className?: string;
}

const Icon = ({ name, className }: IconProps) => {
  const SVG = Icons[name];
  return <SVG name={name} className={className ? className : ''} />;
};

export default Icon;
