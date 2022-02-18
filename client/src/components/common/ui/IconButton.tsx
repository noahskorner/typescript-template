interface IconButtonProps {
  handleClick: Function;
  icon: JSX.Element;
  className?: string;
}

const IconButton = ({ handleClick, icon, className }: IconButtonProps) => {
  return (
    <button
      onClick={() => handleClick()}
      className={`${className} btn-primary`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
