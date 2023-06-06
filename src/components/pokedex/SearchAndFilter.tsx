import React, { useContext } from 'react';
import Input from '../form-elements/Input';
import Button from '../form-elements/Button';
import Icon from '../../assets/icons/Icon';
import { HiAdjustments } from 'react-icons/hi';
import { FilterContext } from '../../context/PokedexFilterContext';

const SearchAndFilter = () => {
  const { showFilter, setShowFilter } = useContext(FilterContext);

  const toggleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="flex gap-2 items-stretch transition-all">
      <Input />
      <Button className="bg-pink-600 hover:shadow-pink-100 hover:shadow-xl transition-shadow cursor-pointer">
        <div className="flex gap-3 items-center text-white">
          Search
          <Icon name="pokeball" className="h-6 w-6 fill-white" />
        </div>
      </Button>
    </div>
  );
};

export default SearchAndFilter;
