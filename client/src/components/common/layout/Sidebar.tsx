import { useEffect, useState } from 'react';
import usePrevious from '../../../hooks/usePrevious';
import useWindowSize from '../../../hooks/useWindowSize';
import { sidebarBtns } from '../../../utils/constants';
import SidebarButton from '../ui/SidebarButton';

interface SidebarProps {
  showSidebar: boolean;
}

const Sidebar = ({ showSidebar }: SidebarProps) => {
  const { heightStr, isMobileWidth } = useWindowSize();
  const prevLayout = usePrevious({ showSidebar, isMobileWidth });
  const [sidebarClass, setSidebarClass] = useState('');

  useEffect(() => {
    setSidebarClass(
      isMobileWidth && showSidebar
        ? '-translate-x-full slide-in'
        : isMobileWidth && !showSidebar
        ? '-translate-x-full slide-out'
        : isMobileWidth
        ? '-translate-x-full'
        : ''
    );
  }, [prevLayout, showSidebar, isMobileWidth]);

  return (
    <div
      className={`${sidebarClass} sidebar`}
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
  );
};

export default Sidebar;
