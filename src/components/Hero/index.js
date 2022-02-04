import { Typography } from '#atoms';
import s from './styles.module.css';

export default function Hero() {
  return (
    <section className={s.hero}>
      <div>
        <Typography variant="h1" color="white">
          Premier League
        </Typography>
      </div>
    </section>
  );
}
