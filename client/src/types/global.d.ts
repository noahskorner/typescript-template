export interface InputProps {
  label?: string;
  placeholder?: string;
  errors?: Array<string>;
}

export interface ActionInterface {
  label: string;
  action: Function;
}

export interface ToastInterface {
  id: string;
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  title?: string | JSX.Element;
  body?: string | JSX.Element;
  actions?: Array<ActionInterface>;
}
