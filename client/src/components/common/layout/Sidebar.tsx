import useWindowSize from '../../../hooks/useWindowSize';
import { XIcon, ChevronRightIcon } from '@heroicons/react/outline';
import IconButton from '../ui/IconButton';

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: Function;
}

const Sidebar = ({ showSidebar, setShowSidebar }: SidebarProps) => {
  const { height, width } = useWindowSize();
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
  return showSidebar || (width && width >= 1024) ? (
    <div className="w-full max-w-xs fixed lg:relative top-0 left-0 z-10">
      <div
        className="bg-primary border-primary border-r w-full overflow-y-auto relative z-10"
        style={{ height: `${height}px`, maxHeight: `${height}px` }}
      >
        <div className="h-14 w-full px-2 lg:px-4 flex justify-end items-center border-b border-primary"></div>
        <div className="space-y-2 p-4">
          <h5 className="text-lg font-semibold">Components</h5>
          {sidebarBtns.map((sidebarBtn) => {
            return (
              <button className="sidebar-btn">
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
      {width && width < 1024 && (
        <div
          onClick={() => setShowSidebar(false)}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 z-0"
        ></div>
      )}
    </div>
  ) : null;
};

export default Sidebar;
