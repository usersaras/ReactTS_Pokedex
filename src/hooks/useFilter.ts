import { useState } from 'react';

const useFilter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  return { showFilter, selectedValues, setShowFilter, setSelectedValues };
};

export default useFilter;
