import useWindowSize from '../../../hooks/useWindowSize';
import { sidebarBtns } from '../../../utils/constants';
import SidebarButton from '../ui/SidebarButton';
import { CSSTransition } from 'react-transition-group';

interface SidebarProps {
  showSidebar: boolean;
}

const Sidebar = ({ showSidebar }: SidebarProps) => {
  const { heightStr, isMobileWidth } = useWindowSize();

  return (
    <CSSTransition
      in={!isMobileWidth || (isMobileWidth && showSidebar)}
      classNames="slide-in"
      timeout={400}
      unmountOnExit
      children={
        <div
          className="sidebar"
          style={{ height: heightStr, maxHeight: heightStr }}
        >
          <div className="h-14 w-full px-2 lg:px-4 flex justify-end items-center border-b border-primary"></div>
          <div className="space-y-2 px-2 py-4 lg:px-4">
            <h5 className="text-lg font-semibold">Components</h5>
            {sidebarBtns.map((sidebarBtn, index) => {
              return (
                <SidebarButton
                  text={sidebarBtn.text}
                  children={sidebarBtn.children}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      }
    />
  );
};

export default Sidebar;
