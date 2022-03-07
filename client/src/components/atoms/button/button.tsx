import Spinner from '../spinner';

const BUTTON_SIZE_CLASSES = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};

const BUTTON_COLOR_CLASSES = {
  fill: {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    warning: 'btn-warning',
    danger: 'btn-danger',
  },
  outline: {
    primary: 'btn-outline-primary',
    secondary: 'btn-outline-secondary',
    success: 'btn-outline-success',
    warning: 'btn-outline-warning',
    danger: 'btn-outline-danger',
  },
  text: {
    primary: 'btn-text-primary',
    secondary: 'btn-text-secondary',
    success: 'btn-text-success',
    warning: 'btn-text-warning',
    danger: 'btn-text-danger',
  },
};

interface ButtonProps {
  children: string | JSX.Element | JSX.Element[];
  onClick?: Function;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'text' | 'outline' | 'fill';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
}

const Button = ({
  children,
  size = 'md',
  variant = 'fill',
  disabled = false,
  loading = false,
  color = 'primary',
  onClick = () => console.warn('onClick not registered.'),
  block = false,
}: ButtonProps) => {
  return (
    <button
      onClick={() => onClick()}
      className={`${
        disabled ? 'btn-disabled' : BUTTON_COLOR_CLASSES[variant][color]
      } ${BUTTON_SIZE_CLASSES[size]} ${
        block ? 'w-full' : ''
      } inline-flex justify-center font-medium`}
      disabled={disabled}
    >
      {loading && <Spinner size={size} className="absolute" />}
      <div className={`${loading && 'opacity-0'}`}>{children}</div>
    </button>
  );
};

export default Button;
