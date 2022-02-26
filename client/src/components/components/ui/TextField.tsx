import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { useEffect, useRef, useState } from 'react';
import InputMask from 'inputmask';

interface TextFieldProps {
  value?: string | number;
  onInput?: Function;
  type?: 'text' | 'password' | 'textarea';
  label?: string;
  placeholder?: string;
  errors?: Array<string>;
  mask?: string;
}

const TextField = ({
  value = '',
  onInput = () => alert('onInput not registered.'),
  type = 'text',
  label,
  placeholder,
  errors = [],
  mask,
}: TextFieldProps) => {
  const textFieldRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (textFieldRef && textFieldRef.current) {
      const inputMask = new InputMask();
      inputMask.mask(textFieldRef.current);
    }
  }, [mask]);

  return (
    <div className="w-full text-sm relative">
      {label && <label htmlFor="">{label}</label>}
      {/* Text Field */}
      <div
        className={`${
          errors.length
            ? 'ring-1 ring-red-500'
            : isFocused
            ? 'ring-1 ring-blue-500'
            : ''
        } w-full border bg-slate-50 dark:bg-slate-800 rounded flex justify-center items-center border-primary`}
      >
        {/* Input */}
        {type !== 'textarea' ? (
          <div className="w-full flex justify-between items-center">
            <input
              ref={textFieldRef}
              type={type !== 'password' ? type : showPassword ? 'text' : type}
              onInput={(e) => onInput((e.target as HTMLTextAreaElement).value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              value={value}
              data-inputmask={`${mask ? mask : ''}`}
              className="w-full bg-slate-50 dark:bg-slate-800 p-2 rounded"
              placeholder={placeholder && placeholder}
            />
            {type === 'password' && (
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="h-full flex justify-center item-center p-2"
              >
                {showPassword ? (
                  <EyeOffIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            )}
          </div>
        ) : (
          // Text Area
          <textarea
            ref={textFieldRef}
            onInput={(e) => onInput((e.target as HTMLTextAreaElement).value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder && placeholder}
            data-inputmask={`${mask ? mask : ''}`}
            className="w-full p-2 bg-slate-50 dark:bg-slate-800 rounded"
          >
            {value}
          </textarea>
        )}
      </div>
      {/* Errors */}
      {errors.length ? (
        <ul className="relative left-5 list-disc p-1 text-xs">
          {errors.map((error) => {
            return (
              <li key={error} className="text-red-500">
                {error}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default TextField;
