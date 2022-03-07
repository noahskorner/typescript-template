import { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ToastManagerContext } from '../../../contexts/toast-context';
import Toast from '../../atoms/toast';

const ToastManager = () => {
  const toastContext = useContext(ToastManagerContext);

  return (
    <div className="left-4 top-4 sm:top-auto sm:bottom-4 fixed z-40 right-4 sm:w-96">
      <TransitionGroup className="space-y-2">
        {toastContext?.toasts.reverse().map((toast) => {
          return (
            <CSSTransition
              key={toast.id}
              timeout={200}
              classNames="slide-in"
              unmountOnExit
              children={<Toast {...toast} />}
            />
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default ToastManager;
