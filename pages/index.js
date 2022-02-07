import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Loader } from '#atoms';
import { Hero, FilterSection, ItemsList, Item, Header } from '#components';
import { baseUrl, requestOptions } from '../src/api-conf';

export default function Home() {
  const [isFetching, setIsFetching] = useState(false);
  const [itemsSource, setItemsSource] = useState([]);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    setIsFetching(true);
    const response = await fetch(`${baseUrl}/teams?league=39&season=2021`, requestOptions);
    const responseToJson = await response.json();
    setIsFetching(false);
    setItems(responseToJson.response);
    setItemsSource(responseToJson.response);
  };

  const handleOnSearch = value => {
    const filteredItems = [...itemsSource].filter(item => item.team.name.toLowerCase().includes(value.toLowerCase()));
    setItems(filteredItems);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <Head>
        <title>Premier League</title>
        <meta name="description" content="Teams of the Premier League" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero title="Premier League" />
        <FilterSection onSearch={handleOnSearch} />

        {isFetching && <Loader />}
        <ItemsList>
          {items.map(item => <Item key={item.team.id} data={item} />)}
        </ItemsList>
      </main>
    </>
  )
}
