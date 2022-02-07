import { Typography } from '#atoms';
import s from './styles.module.css';

export default function Hero({ title }) {
  return (
    <section className={s.hero}>
      <div>
        <Typography variant="h1" color="white">
          {title}
        </Typography>
      </div>
    </section>
  );
}
