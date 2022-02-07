import s from './styles.module.css';

export default function Select({ name, placeholder }) {
  return (
    <select className={s.selectWrapper} name={name}>
      <option>{placeholder}</option>
    </select>
  );
}
