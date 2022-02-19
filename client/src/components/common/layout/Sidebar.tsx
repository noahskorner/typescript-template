import useWindowSize from '../../../hooks/useWindowSize';
import { ChevronRightIcon } from '@heroicons/react/outline';

interface SidebarProps {
  showSidebar: boolean;
}

const sidebarBtns = [
  'inputs',
  'data display',
  'feedback',
  'surfaces',
  'navigation',
  'layout',
  'utils',
  'data grid',
];

const Sidebar = ({ showSidebar }: SidebarProps) => {
  const { heightStr, isMobileWidth } = useWindowSize();

  return (
    <div
      className={`${
        isMobileWidth && showSidebar
          ? '-translate-x-full slide-in'
          : isMobileWidth && !showSidebar
          ? '-translate-x-full slide-out'
          : ''
      } sidebar`}
      style={{ height: heightStr, maxHeight: heightStr }}
    >
      <div className="h-14 w-full px-2 lg:px-4 flex justify-end items-center border-b border-primary"></div>
      <div className="space-y-2 p-4">
        <h5 className="text-lg font-semibold">Components</h5>
        {sidebarBtns.map((sidebarBtn, index) => {
          return (
            <button key={index} className="sidebar-btn">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <h6>{sidebarBtn}</h6>
              </div>
              <ChevronRightIcon className="w-4 h-4 text-blue-500" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
