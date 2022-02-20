interface ComponentProps {
  header: string;
  children: JSX.Element | JSX.Element[];
}

const Component = ({ header, children }: ComponentProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">{header}</h1>
      <div>{children}</div>
    </div>
  );
};

export default Component;
