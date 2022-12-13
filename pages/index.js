import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
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
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/rev">Reviews</a>
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
      <h1 class="text-center mt-4">Working with Wordpress API, NextJS, and React</h1>
      <div class="text-center">
      <img class="img-fluid" src='/siteLogo.jpg' alt='Logo for Site' width="20%" height="20%"/>
      </div>

    <p class="text-center mb-4"> This application uses React and NextJS to display current data 
    from the WordPress API. The data displayed is created from custom fields in WordPress by me. 
    </p>
</Layout>
  );
}

/*
export default function Home({ allData }) {
  return (
<Layout home>
        <h1 class="text-center">WordPress Custom Post Types from WordPress API</h1>
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
*/