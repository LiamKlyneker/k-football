import { Typography } from '#atoms';
import Image from 'next/image';
import s from './styles.module.css';

export default function Item({ data }) {
  return (
    <a href="#" className={s.itemWrapper}>
      <figure>
        <Image src={data.team.logo} alt={data.team.code} layout="fill" />
      </figure>
      <Typography variant="h4">{data.team.name}</Typography>
      <Typography variant="tag">{data.team.code}</Typography>

      <footer>
        <Typography variant="subtitle">{data.team.founded}</Typography>
        <Typography variant="subtitle">{data.venue.name} - {data.venue.city}</Typography>
      </footer>
    </a>
  );
}
