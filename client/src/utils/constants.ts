import { SidebarButtonProps } from '../components/common/ui/SidebarButton';

export const sidebarBtns: Array<SidebarButtonProps> = [
  {
    text: 'Inputs',
    children: [
      {
        id: 'buttons',
        text: 'Button',
      },
      {
        text: 'Checkbox',
      },
      {
        text: 'Radio Button',
      },
      {
        id: 'selects',
        text: 'Select',
      },
      {
        text: 'Slider',
      },
      {
        text: 'Switch',
      },
      {
        id: 'text-fields',
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
