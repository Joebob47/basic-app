import Head from 'next/head';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';

// The !home part says if you're not home, output link to go back home
export default function Layout( { children, home } ) {
  return (
    <div>
      
      <Head>
        <title>Basic Next.js App</title>
      </Head>

      <main>{children}</main>
      {!home && (
      <div class="text-center">
          <Link legacyBehavior href="/">
            <a class="btn btn-primary mt-3">← Back to home</a>
          </Link>
        </div>
        )
      }
      <footer class="text-center pt-2 fixed-bottom">
        <p>Data from WordPress API, a Basic-App</p>
      </footer>
    </div>
  );
}

{
  /*
          <nav>
           <a href="/"> Home </a>
           <a href="/rev"> Reviews </a>
           <a href="/positive">Positive Reviews</a>
           <a href="/negative"> Negative Reviews</a>
        </nav>
  */
}