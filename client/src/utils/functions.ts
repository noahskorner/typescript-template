export const convertRemToPixels = (rem: number) => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

export const isStringArray = (value: any): boolean => {
  return (
    Array.isArray(value) && value.every((item) => typeof item === 'string')
  );
};

export const isNumArray = (value: any): boolean => {
  return (
    Array.isArray(value) && value.every((item) => typeof item === 'number')
  );
};
