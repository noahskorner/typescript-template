import { LoginIcon } from "@heroicons/react/outline";
import ThemeButton from "../ui/ThemeButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="border-b border-slate-900/10 dark:border-slate-300/10 w-full h-14 font-medium flex items-center justify-center text-sm px-4 sm:px-6">
      <div className="max-w-container w-full space-x-6 flex justify-between text-slate-200">
        <div></div>
        <div className="flex space-x-4">
          <ThemeButton />
          <Link to="/login">
            <LoginIcon className="h-6 w-6 hover:text-sky-500" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
