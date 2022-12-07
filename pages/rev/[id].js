import Layout from '../../components/layout';
import {getAllIds, getData} from '../../lib/data';

//create an instance of getStaticProps to return data for one person
export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    },
    revalidate:60
  };
}

//create an instance of the getStaticPaths() function to report to Next all possible dynamic URLs.
///this function just returns an array of ids in a particular way with those params in it
export async function getStaticPaths() {
  const paths =  await getAllIds();

  console.log(paths);
  return {
    paths,
    fallback: false
  };
}

//create a component to display all details about a person when a dynam. route matches
//itemData here will be the entire chunk of info for the specific id
//THIS FORMAT IS CONFUSING TO ME
export default function Entry({ itemData }) {
  let splitData = itemData[0].acf_fields.split(",");
  console.log("THIS IS SPLIT DATA 0: " + splitData[0]);
  return (
      <Layout>
      <article className="card col-6 mx-auto text-center">
        <h1> {itemData[0].post_title} </h1>
        <div className="card-body">
        <p className="card-text">{itemData[0].post_content}</p>
          <p className="card-text">{splitData[2]}</p>
          <p className="card-text">{splitData[4]}</p>
          <p className="card-text">{splitData[6]}</p>
          <h6 className="card-subtitle mb-2 text-muted">Post Status: {itemData[0].post_status}</h6>
        </div>
        
      </article>
    </Layout>
  );
}

{/*    ABOVE RETURN STATEMENT
let noTagString = itemData[0].post_content;
  noTagString=noTagString.replace('<!-- wp:paragraph -->','');
  noTagString=noTagString.replace('<p>','');
  noTagString=noTagString.replace('</p>','');
  noTagString=noTagString.replace('<!-- /wp:paragraph -->','');
  */
}

    {/* IN RETURN STATEMENT
    <Layout>
      <article className="card col-6 mx-auto text-center">
        <h1> {itemData[0].post_title} </h1>
        <div className="card-body">
          <p className="card-text">{noTagString}</p>
          <h6 className="card-subtitle mb-2 text-muted">Last modified: {itemData[0].post_modified}</h6>
          <a href={'mailto:' + itemData[0].email} className="card-link">{itemData[0].email}</a>
        </div>
        
      </article>
    </Layout>
  */}