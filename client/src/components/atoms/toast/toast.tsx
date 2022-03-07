import { ToastInterface } from '../../../types/global';
import { MouseEvent, useContext } from 'react';
import { ToastManagerContext } from '../../../contexts/toast-context';

const TOAST_CLASSES = {
  primary: 'toast-primary',
  secondary: 'toast-secondary',
  success: 'toast-success',
  warning: 'toast-warning',
  danger: 'toast-danger',
};

const Toast = ({ id, color, title, body, actions }: ToastInterface) => {
  const toastContext = useContext(ToastManagerContext);

  const handleToastClick = (e: MouseEvent<HTMLDivElement>) => {
    const classListArr = Array.from((e.target as HTMLButtonElement).classList);
    if (!classListArr.includes('action')) toastContext?.removeToast(id);
  };

  return (
    <div
      onClick={handleToastClick}
      className="w-full rounded-md border border-inset border-primary bg-white dark:bg-slate-700 shadow-lg flex items-stretch pl-4 text-sm relative cursor-pointer"
    >
      <div
        className={`${TOAST_CLASSES[color]} w-4 absolute -top-[1px] -bottom-[1px]`}
      ></div>
      <div className="w-full pl-8 space-y-1 py-3">
        {title && <h6 className="font-medium">{title}</h6>}
        {body && <p className="text-slate-500 dark:text-slate-300">{body}</p>}
        <div className="max-w-fit flex flex-wrap justify-start items-start">
          {actions?.map((a, index) => {
            return (
              <button
                key={index}
                className="text-blue-400 font-semibold hover:underline text-center pr-2 action"
                onClick={() => a.action()}
              >
                {a.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Toast;
