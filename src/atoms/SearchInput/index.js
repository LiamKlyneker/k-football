import s from './styles.module.css';

export default function SearchInput({ name, placeholder }) {
  return (
    <div className={s.searchInputWrapper}>
      <input name={name} placeholder={placeholder} />
    </div>
  );
}
