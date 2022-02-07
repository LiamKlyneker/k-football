import s from './styles.module.css';

export default function ThemeSwitch({ name, onChange, checked }) {
  return (
    <label className={s.themeSwitchWrapper}>
      <div>
        <input
          type="checkbox"
          name={name}
          onChange={ev => onChange(name, ev.target.checked)}
          checked={checked}
        />
        <span />
      </div>
      {checked && <i className="material-icons-outlined">nightlight</i>}
      {!checked && <i className="material-icons-outlined text-gray-200">wb_sunny</i>}
    </label>
  );
}
