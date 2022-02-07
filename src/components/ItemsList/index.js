import s from './styles.module.css';

export default function ItemsList({ children }) {
  return (
    <section className={s.itemsListWrapper}>
      <div>
        {children}
      </div>
    </section>
  );
}
