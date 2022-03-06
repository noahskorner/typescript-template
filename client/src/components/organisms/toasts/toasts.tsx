import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Toast from '../../atoms/toast';

const Toasts = () => {
  return (
    <div className="toasts left-4 top-4 sm:top-auto sm:bottom-4 fixed z-40 right-4 sm:w-96">
      <TransitionGroup appear>
        <CSSTransition
          in={true}
          timeout={200}
          classNames="slide-in"
          unmountOnExit
          children={<Toast />}
        />
      </TransitionGroup>
    </div>
  );
};

export default Toasts;
