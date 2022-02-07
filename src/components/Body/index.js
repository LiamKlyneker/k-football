import s from './styles.module.css';

export default function Body({ children }) {
  return (
    <section className={s.itemsListWrapper}>
      <div>
        {children}
      </div>
    </section>
  );
}
