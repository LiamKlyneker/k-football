import Image from 'next/image';
import { Header, Hero, Body } from '#components';
import Head from 'next/head';
import { baseUrl, requestOptions } from '../../src/api-conf';

export default function TeamDetail({ data = {} }) {
  return (
    <>
      <Head>
        <title>{data.team.name}</title>
        <meta name="description" content={`Detail Page for ${data.team.name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero title={data.team.name} />
        <Body>
        <figure className="relative w-32 h-32 mb-6">
          <Image src={data.team.logo} alt={data.team.code} layout="fill" />
        </figure>
          <p className="dark:text-white">Code – {data.team.code}</p>
          <p className="dark:text-white">Founded – {data.team.founded}</p>
          <p className="dark:text-white">Stadium – {data.venue.name}</p>
          <p className="dark:text-white">City – {data.venue.city}</p>
        </Body>
      </main>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const response = await fetch(`${baseUrl}/teams?id=${query.id}`, requestOptions);
  const responseToJson = await response.json();
  return { props: { data: responseToJson.response.pop() } };
}
