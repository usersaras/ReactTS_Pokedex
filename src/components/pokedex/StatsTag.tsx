import React from 'react';

interface StatsTagProps {
  attributeHeading: string;
  attributeValue: string | undefined;
}

const StatsTag = ({ attributeHeading, attributeValue }: StatsTagProps) => {
  return (
    <div className="flex flex-col gap-1 ">
      <h6 className="text-slate-800 text-sm font-semibold text-center">
        {attributeHeading}
      </h6>
      <p className="text-sm bg-slate-100 p-2 rounded-full text-center">
        {attributeValue ?? 'N/A'}
      </p>
    </div>
  );
};

export default StatsTag;
