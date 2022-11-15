import Head from 'next/head';
import Link from 'next/link';
import { getSortedList } from '../lib/data';
import Layout from '../components/layout';

export async function getStaticProps() {
  const allData = await getSortedList();
  return {
    props: {
      allData
    }
  }
}
export default function Home({ allData }) {
  return (
<Layout home>
        <h1 class="text-center">WordPress Posts</h1>
        <div className="list-group text-center">
          {allData.map(({ id, name }) => (
            <Link legacyBehavior key={id} href={`/${id}`}>
              <a className="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))}
        </div>
</Layout>
  );
}
