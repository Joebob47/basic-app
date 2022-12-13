import Link from 'next/link';
import { getSortedList } from '../lib/data';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.css';

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
<header className="marginMe">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/rev">Reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/positive">Positive Reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/negative">Negative Reviews</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </header>
        <h1 class="text-center">Reviews</h1>
        <div className="list-group text-center makeThin">
          {allData.map(({ id, name }) => (
            
            <Link legacyBehavior key={id} href={`/rev/${id}`}>
              <a className="list-group-item list-group-item-action">{name}</a>
            </Link>
            
          ))}
        </div>
</Layout>
  );
}