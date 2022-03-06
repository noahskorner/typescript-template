export interface ToastProps {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const Toast = ({ color = 'primary' }: ToastProps) => {
  return (
    <div className="w-full rounded-md border border-inset border-primary bg-white dark:bg-slate-700 shadow-lg flex items-center p-4 text-sm">
      <div className="h-full w-4 absolute top-0 bg-blue-600"></div>
      <div className="w-full pl-8">This is toast content</div>
    </div>
  );
};

export default Toast;
