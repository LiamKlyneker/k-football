import Image from 'next/image';
import { Typography } from '#atoms';
import s from './styles.module.css';

export default function Item({ data }) {
  return (
    <a
      className={s.itemWrapper}
      href={`/team/${data.team.id}`}
      target="_blank"
      rel="noreferrer"
    >
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
