import s from './styles.module.css';

export default function SearchInput({ name, placeholder, onChange }) {
  return (
    <div className={s.searchInputWrapper}>
      <input
        name={name}
        placeholder={placeholder}
        onChange={ev => onChange(name, ev.target.value)}
      />
    </div>
  );
}
