import { useState } from 'react';
import Component from '../layout/Component';
import Variant from '../layout/Variant';
import Select, { SelectOption } from '../ui/Select';

const basicSelectOptions: Array<SelectOption> = [
  {
    text: 'Option 1',
    value: 1,
  },
  {
    text: 'Option 2',
    value: 2,
  },
  {
    text: 'Option 3',
    value: 3,
  },
  {
    text: 'Option 4',
    value: 4,
  },
  {
    text: 'Option 5',
    value: 5,
  },
];

const Selects = () => {
  const [basicSelect, setBasicSelect] = useState<string | undefined>(undefined);

  return (
    <Component header="Selects">
      <Variant header="Basic Selects">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
          <Select
            placeholder="Placeholder"
            label="Basic Select"
            options={basicSelectOptions}
            value={basicSelect}
            onSelect={setBasicSelect}
          />
        </div>
      </Variant>
    </Component>
  );
};

export default Selects;
