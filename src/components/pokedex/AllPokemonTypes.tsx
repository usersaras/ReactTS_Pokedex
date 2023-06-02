import Icon from '../../assets/icons/Icon';

const AllPokemonTypes = () => {
  const types = [
    {
      name: 'Normal',
      icon: <Icon name="pokeball" className="fill-slate-950 h-4 w-4" />,
    },
    { name: 'Fire', icon: <Icon name="pokeball" /> },
    { name: 'Water', icon: <Icon name="pokeball" /> },
    { name: 'Grass', icon: <Icon name="pokeball" /> },
    { name: 'Electric', icon: <Icon name="pokeball" /> },
    { name: 'Ice', icon: <Icon name="pokeball" /> },
    { name: 'Fighting', icon: <Icon name="pokeball" /> },
    { name: 'Poison', icon: <Icon name="pokeball" /> },
    { name: 'Ground', icon: <Icon name="pokeball" /> },
    { name: 'Flying', icon: <Icon name="pokeball" /> },
    { name: 'Psychic', icon: <Icon name="pokeball" /> },
    { name: 'Bug', icon: <Icon name="pokeball" /> },
    { name: 'Rock', icon: <Icon name="pokeball" /> },
    { name: 'Ghost', icon: <Icon name="pokeball" /> },
    { name: 'Dark', icon: <Icon name="pokeball" /> },
    { name: 'Dragon', icon: <Icon name="pokeball" /> },
    { name: 'Steel', icon: <Icon name="pokeball" /> },
    { name: 'Fairy', icon: <Icon name="pokeball" /> },
  ];

  return (
    <div className="flex gap-2 flex-wrap mt-3">
      {types.map(({ name, icon }) => {
        return (
          <div
            key={name}
            className="bg-slate-200 flex items-center gap-1 px-3 py-2 text-xs font-medium rounded-full"
          >
            {name} {icon}
          </div>
        );
      })}
    </div>
  );
};

export default AllPokemonTypes;
