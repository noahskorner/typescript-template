import useWindowSize from '../../../hooks/useWindowSize';
import Header from './Header';
import Sidebar from './Sidebar';

interface PageWrapperProps {
  children?: JSX.Element | JSX.Element[];
}

const PageWrapper = (props: PageWrapperProps) => {
  const { width, height } = useWindowSize();
  const pageWrapperStyle = { width: `${width}px`, minHeight: `${height}px` };

  return (
    <div className="bg-white dark:bg-slate-900" style={pageWrapperStyle}>
      <Header />
      <div className="w-full flex justify-center items-start">
        <div className="w-full max-w-container">
          <Sidebar />
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
