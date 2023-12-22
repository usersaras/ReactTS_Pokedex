import { Listbox } from '@headlessui/react';
import { useState } from 'react';
import Button from './Button';
import { FaChevronDown } from 'react-icons/fa';

const types = [
  'Normal',
  'Fire',
  'Water',
  'Grass',
  'Flying',
  'Fighting',
  'Poison',
  'Electric',
  'Ground',
  'Rock',
  'Psychic',
  'Ice',
  'Bug',
  'Ghost',
  'Steel',
  'Dragon',
  'Dark',
  'Fairy',
];

const DropDown = () => {
  const [selectedPeople, setSelectedPeople] = useState<
    { id: number; name: string; unavailable: boolean }[] | []
  >([]);

  return (
    <div className="relative bg-white">
      <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
        <Listbox.Button>
          <Button className="border flex whitespace-nowrap items-center text-slate-400 gap-2 w-44 ">
            <div className="flex justify-between items-center w-full">
              <div className="font-normal">Select Type</div>
              <FaChevronDown className="w-3 text-cyan-800" />
            </div>
          </Button>
        </Listbox.Button>
        <Listbox.Options className="absolute top-[115%] py-1 bg-white z-30 whitespace-nowrap border rounded right-0 w-full h-60 overflow-y-scroll">
          <div className="p-2 flex flex-col gap-1">
            {types.map((type) => (
              <Listbox.Option key={type} value={type}>
                {({ selected }) => (
                  <span
                    className={`block truncate px-3 py-2 ${
                      selected
                        ? 'font-medium bg-slate-100 rounded'
                        : 'font-normal'
                    }`}
                  >
                    {type}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </div>
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default DropDown;
