import useWindowSize from '../../../hooks/useWindowSize';
import SidebarButton, { SidebarButtonProps } from '../ui/SidebarButton';

interface SidebarProps {
  showSidebar: boolean;
}

const sidebarBtns: Array<SidebarButtonProps> = [
  {
    text: 'Inputs',
    children: [
      {
        text: 'Button',
      },
      {
        text: 'Button Group',
      },
      {
        text: 'Checkbox',
      },
      {
        text: 'Radio Button',
      },
      {
        text: 'Select',
      },
      {
        text: 'Slider',
      },
      {
        text: 'Switch',
      },
      {
        text: 'Text Field',
      },
    ],
  },
  { text: 'Data Display' },
  { text: 'Feedback' },
  { text: 'Surfaces' },
  { text: 'Navigation' },
  { text: 'Layout' },
  { text: 'Utils' },
  { text: 'Data Grid' },
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
