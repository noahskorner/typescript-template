import { InputProps } from '../../../types/global';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export interface SelectOption {
  text: string;
  value: string | number;
}

interface SelectProps extends InputProps {
  options: Array<SelectOption>;
  onSelect?: Function;
}

const Select = ({
  value,
  label,
  placeholder,
  errors = [],
  options,
  onSelect = (value: string | number) =>
    alert(`onSelect not registered, ${value} selected.`),
}: SelectProps) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="relative w-full text-sm space-y-1">
      {label && <label>{label}</label>}
      {/* Select */}
      <button
        onClick={() => setShowOptions(!showOptions)}
        onBlur={() => setShowOptions(false)}
        className={`${
          errors.length
            ? 'ring-1 ring-red-500'
            : 'focus:ring-1 focus:ring-blue-500'
        } w-full border shadow-sm bg-slate-50 dark:bg-slate-800 rounded-md flex justify-center items-center border-primary text-left`}
      >
        <div className="w-full bg-slate-50 dark:bg-slate-800 p-2 rounded-md">
          {value ? value : placeholder ? placeholder : null}
        </div>
        <div className="h-full flex justify-center items-center text-slate-400">
          <div className="flex flex-col justify-center items-center px-2">
            <ChevronUpIcon className="h-4 w-4" />
            <ChevronDownIcon className="h-4 w-4" />
          </div>
        </div>
      </button>
      {/* Options */}
      <CSSTransition
        in={showOptions}
        timeout={200}
        classNames="fade-in"
        unmountOnExit
        children={
          <div className="absolute w-full max-h-52 overflow-y-auto bg-slate-50 dark:bg-slate-800 py-2 rounded-md shadow-lg border border-primary">
            {options.map((option) => {
              return (
                <option
                  onClick={() => onSelect(option.value)}
                  key={option.value}
                  value={option.value}
                  className="hover:bg-slate-100 dark:hover:bg-slate-700 p-2 cursor-pointer"
                >
                  {option.text}
                </option>
              );
            })}
          </div>
        }
      />
      {/* Errors */}
      {errors.length ? (
        <div>
          {errors.map((error) => {
            return (
              <p key={error} className="text-red-500 font-medium">
                {error}
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Select;
