import useToggle from '../../../hooks/useToggle';
import useWindowSize from '../../../hooks/useWindowSize';
import Header from './Header';
import Sidebar from './Sidebar';

interface PageWrapperProps {
  children?: JSX.Element | JSX.Element[];
}

const PageWrapper = (props: PageWrapperProps) => {
  const { width, height } = useWindowSize();
  const pageWrapperStyle = { width: `${width}px`, minHeight: `${height}px` };
  const { toggle: showSidebar, setToggle: setShowSidebar } = useToggle(false);

  return (
    <div
      className="bg-primary flex text-slate-700 dark:text-slate-200 relative"
      style={pageWrapperStyle}
    >
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="w-full relative z-0">
        <Header setShowSidebar={setShowSidebar} />
        <div className="w-full flex justify-center 2xl:pr-96">
          <div className="w-full max-w-7xl">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageWrapper;
