import { useState } from 'react';
import { SearchInput, Select } from '#atoms';
import s from './styles.module.css';

export default function FilterSection({ onSearch }) {
  const [searchText, setSearchText] = useState('');
  return (
    <section className={s.filterSectionWrapper}>
      <div>
        <SearchInput
          name="search-teams"
          placeholder="Search by Team Name"
          onChange={(_ ,value) => onSearch(value)}
          value={searchText}
        />

        {/* <div>
          <Select placeholder="City" />
          <Select placeholder="Order by Name | ASC" />
        </div> */}
      </div>
    </section>
  );
}
