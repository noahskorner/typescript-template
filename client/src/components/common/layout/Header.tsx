import { LoginIcon, MenuAlt1Icon } from '@heroicons/react/outline';
import ThemeButton from '../ui/ThemeButton';
import IconButton from '../ui/IconButton';
import { Link } from 'react-router-dom';

interface HeaderProps {
  setShowSidebar: Function;
}

const Header = ({ setShowSidebar }: HeaderProps) => {
  return (
    <nav className="border-b border-primary w-full h-14 font-medium flex items-center justify-center text-sm px-2 lg:px-4">
      <div className="w-full space-x-6 flex justify-between">
        <div className="flex space-x-4">
          <IconButton
            handleClick={() => setShowSidebar(true)}
            icon={<MenuAlt1Icon className="h-5 w-5" />}
            className="lg:hidden"
          />
        </div>
        <div className="flex space-x-4">
          <ThemeButton />
          <Link to="/login" className="btn-primary">
            <LoginIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
