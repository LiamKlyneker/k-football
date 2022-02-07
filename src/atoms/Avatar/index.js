import Image from 'next/image';
import s from './styles.module.css';

export default function Avatar() {
  return (
    <a
      href="https://www.liamklyneker.com/"
      target="_blank"
      rel="noreferrer"
      className={s.avatarWrapper}
    >
      <figure>
        <Image src="/profile-picture.jpg" alt="User Avatar" layout="fill" />
      </figure>
      <p>hire_me -&gt;</p>
    </a>
  );
}
