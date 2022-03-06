import useToggle from '../../../hooks/useToggle';
import useWindowSize from '../../../hooks/useWindowSize';
import Footer from '../../organisms/footer';
import Header from '../../organisms/header';
import Sidebar from '../../organisms/sidebar';
import Toasts from '../../organisms/toasts';

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const Layout = (props: LayoutProps) => {
  const { isMobileWidth, heightStr } = useWindowSize();
  const { toggle: showSidebar, setToggle: setShowSidebar } = useToggle(false);

  return (
    <div
      style={{ minHeight: heightStr }}
      className="bg-primary flex text-gray-700 dark:text-slate-200 relative"
    >
      <Sidebar showSidebar={showSidebar} />
      {showSidebar && isMobileWidth && (
        <div
          onClick={() => setShowSidebar(false)}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 z-20"
        ></div>
      )}
      <div className="w-full relative z-0">
        <Header setShowSidebar={setShowSidebar} />
        <div className="w-full flex justify-center lg:pl-80 2xl:pr-80 pt-14">
          <div className="w-full max-w-3xl p-4">{props.children}</div>
        </div>
        <Footer />
      </div>
      <Toasts />
    </div>
  );
};

export default Layout;
