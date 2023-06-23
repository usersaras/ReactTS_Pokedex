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
    <div className="relative">
      <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
        <Listbox.Button>
          <Button className="border bg-slate-50 flex whitespace-nowrap items-center text-slate-500 gap-2">
            <>
              Select Type
              <FaChevronDown className="w-3" />
            </>
          </Button>
        </Listbox.Button>
        <Listbox.Options className="absolute top-[115%] py-1 bg-white z-30 whitespace-nowrap border rounded right-0 w-full h-60 overflow-y-scroll">
          <div>
            {types.map((type) => (
              <Listbox.Option key={type} value={type}>
                {({ selected }) => (
                  <span
                    className={`block truncate px-3 py-2 ${
                      selected ? 'font-medium bg-slate-100 ' : 'font-normal'
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
