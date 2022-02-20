interface IconButtonProps {
  onClick: Function;
  icon: JSX.Element;
  className?: string;
}

const IconButton = ({ onClick, icon, className }: IconButtonProps) => {
  return (
    <button onClick={() => onClick()} className={`${className} btn-primary`}>
      {icon}
    </button>
  );
};

export default IconButton;
