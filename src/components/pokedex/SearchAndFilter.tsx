import React, { useContext } from 'react';
import Input from '../form-elements/Input';
import Button from '../form-elements/Button';
import Icon from '../../assets/icons/Icon';
import { HiAdjustments } from 'react-icons/hi';
import { FilterContext } from '../../context/PokedexFilterContext';
import DropDown from '../form-elements/DropDown';

const SearchAndFilter = () => {
  const { showFilter, setShowFilter } = useContext(FilterContext);

  const toggleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="flex gap-2 items-stretch transition-all">
      <Input />

      <DropDown />
    </div>
  );
};

export default SearchAndFilter;
