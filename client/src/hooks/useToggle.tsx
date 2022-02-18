import { useState } from 'react';

const useToggle = (initialValue: boolean) => {
  const [toggle, setToggle] = useState(initialValue);

  return {
    toggle,
    setToggle,
  };
};

export default useToggle;
