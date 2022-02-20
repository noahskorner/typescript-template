import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import IconButton from './IconButton';

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

  return theme === ThemeEnum.LIGHT ? (
    <IconButton
      onClick={() => setTheme(ThemeEnum.DARK)}
      icon={<SunIcon className="h-5 w-5" />}
    />
  ) : (
    <IconButton
      onClick={() => setTheme(ThemeEnum.LIGHT)}
      icon={<MoonIcon className="h-5 w-5" />}
    />
  );
};

export default ThemeButton;
