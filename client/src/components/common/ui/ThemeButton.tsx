import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';

enum ThemeEnum {
  LIGHT,
  DARK,
}

const ThemeButton = () => {
  const [theme, setTheme] = useState(() => {
    try {
      const storedTheme = localStorage.getItem('theme');
      return storedTheme ? parseInt(storedTheme) : ThemeEnum.LIGHT;
    } catch (error) {
      return ThemeEnum.LIGHT;
    }
  });

  useEffect(() => {
    localStorage.setItem('theme', theme.toString());
    const html = document.getElementsByTagName('html')[0];

    if (theme === ThemeEnum.LIGHT && html.classList.contains('dark')) {
      html.classList.remove('dark');
    } else if (theme === ThemeEnum.DARK && !html.classList.contains('dark')) {
      html.classList.add('dark');
    }
  }, [theme]);

  return (
    <button>
      {theme === ThemeEnum.LIGHT ? (
        <SunIcon
          className="h-6 w-6 hover:text-sky-500"
          onClick={() => setTheme(ThemeEnum.DARK)}
        />
      ) : (
        <MoonIcon
          className="h-6 w-6 hover:text-sky-500"
          onClick={() => setTheme(ThemeEnum.LIGHT)}
        />
      )}
    </button>
  );
};

export default ThemeButton;
