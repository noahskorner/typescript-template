import Spinner from './Spinner';

interface ButtonProps {
  children: string | JSX.Element | JSX.Element[];
  size?: 'sm' | 'md' | 'lg';
  variant?: 'text' | 'outline' | 'fill';
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({
  children,
  size = 'md',
  variant = 'fill',
  disabled = false,
  loading = false,
}: ButtonProps) => {
  const getSize = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1 text-xs rounded';
      case 'md':
        return 'px-4 py-2 text-sm rounded-md';
      case 'lg':
        return 'px-6 py-3 text-lg rounded-lg';
    }
  };

  const getColor = () => {
    // disabled

    // variant

    // color
    return 'text-white bg-blue-600 hover:bg-blue-700';
  };

  return (
    <button
      className={`${getSize()} ${getColor()} inline-flex justify-center shadow-sm font-medium`}
      disabled={disabled}
    >
      {loading ? <Spinner size={size} /> : children}
    </button>
  );
};

export default Button;
