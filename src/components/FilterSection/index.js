import { SearchInput, Select } from '#atoms';
import s from './styles.module.css';

export default function FilterSection() {
  return (
    <section className={s.filterSectionWrapper}>
      <div>
        <SearchInput name="search-teams" placeholder="Search" />

        <div>
          <Select placeholder="City" />
          <Select placeholder="Order by Name | ASC" />
        </div>
      </div>
    </section>
  );
}
