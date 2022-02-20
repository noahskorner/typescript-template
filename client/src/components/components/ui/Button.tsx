import Spinner from './Spinner';

interface ButtonProps {
  children: string | JSX.Element | JSX.Element[];
  size?: 'sm' | 'md' | 'lg';
  variant?: 'text' | 'outline' | 'fill';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  loading?: boolean;
  onClick?: Function;
}

const Button = ({
  children,
  size = 'md',
  variant = 'fill',
  disabled = false,
  loading = false,
  color = 'primary',
  onClick,
}: ButtonProps) => {
  const getSize = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1 text-xs rounded';
      case 'md':
        return 'px-4 py-2 text-sm rounded-md';
      case 'lg':
        return 'px-8 py-3 text-lg rounded-lg';
    }
  };

  const getColor = () => {
    // color
    const classes: Array<string> = [];

    // disabled
    if (!disabled) {
      classes.push('text-white');
      switch (color) {
        case 'primary':
          classes.push('bg-blue-600');
          classes.push('hover:bg-blue-700');
          break;
        case 'secondary':
          classes.push('bg-slate-500');
          classes.push('hover:bg-slate-400');
          classes.push('dark:bg-slate-700');
          classes.push('dark:hover:bg-slate-600');
          break;
        case 'success':
          classes.push('bg-green-600');
          classes.push('hover:bg-green-700');
          break;
        case 'warning':
          classes.push('bg-yellow-500');
          classes.push('hover:bg-yellow-600');
          classes.push('dark:bg-yellow-600');
          classes.push('hover:bg-yellow-700');
          break;
        case 'danger':
          classes.push('bg-red-600');
          classes.push('hover:bg-red-700');
          break;
      }
    } else {
      switch (color) {
        case 'primary':
          classes.push('text-slate-400');
          classes.push('bg-blue-500');
          break;
        case 'secondary':
          classes.push('text-slate-300');
          classes.push('bg-slate-500');
          break;
        case 'success':
          classes.push('text-slate-300');
          classes.push('bg-green-500');
          break;
        case 'warning':
          classes.push('text-slate-300');
          classes.push('bg-yellow-500');
          break;
        case 'danger':
          classes.push('text-slate-300');
          classes.push('bg-red-500');
          break;
      }
    }

    // variant

    // color
    return classes.join(' ');
  };

  return (
    <button
      onClick={() => {
        if (onClick) onClick();
      }}
      className={`${getSize()} ${getColor()} inline-flex justify-center shadow-sm font-medium`}
      disabled={disabled}
    >
      {loading ? <Spinner size={size} /> : children}
    </button>
  );
};

export default Button;
