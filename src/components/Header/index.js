import { useEffect, useState } from 'react';
import { ThemeSwitch, Avatar } from '#atoms';
import s from './styles.module.css';
import cx from 'classnames';

export default function Header() {
  const [theme, setTheme] = useState('light');

  const handleOnChangeTheme = (_, value) => {
    const valueToSet = value ? 'dark' : 'light';
    setTheme(valueToSet);
    localStorage.theme = valueToSet;
    if (valueToSet === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [])

  return (
    <header className={s.headerWrapper}>
      <div>
        <i className={cx(s.logo, 'material-icons-outlined')}>sports_soccer</i>

        <div className={s.avatarSide}>
          <ThemeSwitch
            name="header-theme-switch"
            onChange={handleOnChangeTheme}
            checked={theme === 'dark'}
          />
          <Avatar />
        </div>
      </div>
    </header>
  );
}
