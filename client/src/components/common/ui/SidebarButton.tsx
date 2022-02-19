import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/outline';
import useToggle from '../../../hooks/useToggle';

export interface SidebarButtonType {
  text: string;
}

export interface SidebarButtonProps {
  text: string;
  children?: Array<SidebarButtonType>;
}

const SidebarButton = ({ text, children }: SidebarButtonProps) => {
  const { toggle: showChildren, setToggle: setShowChildren } = useToggle(false);

  return (
    <div>
      <button
        onClick={() => setShowChildren(!showChildren)}
        className="sidebar-btn font-medium"
      >
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <h6>{text}</h6>
        </div>
        {showChildren ? (
          <ChevronDownIcon className="w-4 h-4 text-blue-500" />
        ) : (
          <ChevronRightIcon className="w-4 h-4 text-blue-500" />
        )}
      </button>
      <div
        className={`${
          showChildren ? 'slide-down' : 'slide-up'
        } overflow-hidden`}
      >
        <div>
          {children?.map((child) => {
            return (
              <button className="sidebar-btn text-slate-600 dark:text-slate-400 pl-8">
                {child.text}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SidebarButton;
