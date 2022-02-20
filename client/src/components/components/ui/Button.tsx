import Spinner from './Spinner';

const btnSizeClass = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};

const btnColorClass = {
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

const btnDisabledClass = {
  fill: {
    primary: 'btn-primary-disabled',
    secondary: 'btn-secondary-disabled',
    success: 'btn-success-disabled',
    warning: 'btn-warning-disabled',
    danger: 'btn-danger-disabled',
  },
  outline: {
    primary: 'btn-outline-primary-disabled',
    secondary: 'btn-outline-secondary-disabled',
    success: 'btn-outline-success-disabled',
    warning: 'btn-outline-warning-disabled',
    danger: 'btn-outline-danger-disabled',
  },
  text: {
    primary: 'btn-text-primary-disabled',
    secondary: 'btn-text-secondary-disabled',
    success: 'btn-text-success-disabled',
    warning: 'btn-text-warning-disabled',
    danger: 'btn-text-danger-disabled',
  },
};

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
  return (
    <button
      onClick={() => {
        if (onClick) onClick();
      }}
      className={`${
        disabled
          ? btnDisabledClass[variant][color]
          : btnColorClass[variant][color]
      } ${btnSizeClass[size]} inline-flex justify-center font-medium`}
      disabled={disabled}
    >
      {loading ? <Spinner size={size} /> : children}
    </button>
  );
};

export default Button;
