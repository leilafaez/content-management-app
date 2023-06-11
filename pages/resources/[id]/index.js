import Layout from "@/components/Layout";
import Link from "next/link";
// import { useRouter } from "next/router";
import axios from "axios";
import ResourceLable from "@/components/ResourceLable";
import moment from "moment";

const ResourceDetail = ({ resource }) => {
  // const router = useRouter();
  // if(router.isFallback){
  //     return <div>Data is loading!</div>
  // }

  const activeResource =()=>{
    axios.patch("/api/resources",{...resource,status : "active"})
    .then(_=>location.reload())
    .catch(_=>alert("cannot activate the resource!"))
  }

  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">
                      {moment(resource.createdAt).format("LLL")}
                      <ResourceLable status={resource.status} />
                    </h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                    <p>Time to finish : {resource.timeToFinish} min</p>
                    {resource.status==="inactive" &&
                      <>
                        <Link
                          legacyBehavior
                          href={`/resources/${resource.id}/edit`}
                        >
                          <a className="button is-warning">Update</a>
                        </Link>
                        <button
                          onClick={activeResource}
                          className="button is-success ml-1"
                        >
                          Activate
                        </button>
                      </>
                    }
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};
//can work both on the client and server
// ResourceDetail.getInitialProps = async({query})=>{
//     const dataRes = await fetch(`http://localhost:3001/api/resources/${query.id}`);
//     const data = await dataRes.json();

//     return {
//         resource :data
//     }
// }
// export async function getStaticPaths(){
//     const resData = await fetch("http://localhost:3001/api/resources");
//     const data = await resData.json();
//     const paths = data.map(resource => {
//         return{
//             params : {id : resource.id}
//         }
//     });

//     return{
//         paths,
//         //means that other routes should resolve into 404 page
//         //if it is true you can add new resource to db in app runtime
//         fallback : true
//     }
// }
// export async function getStaticProps({ params }) {
//   const dataRes = await fetch(
//     `http://localhost:3001/api/resources/${params.id}`
//   );
//   const data = await dataRes.json();
//   return {
//     props: {
//       resource: data,
//     },
//     revalidate :1 //by this option you can do any changes on resource at runtime without any biuld and can see the result after 1sec
//   };

export async function getServerSideProps({ params }) {
  const dataRes = await fetch(
    `http://localhost:3001/api/resources/${params.id}`
  );
  const data = await dataRes.json();
  return {
    props: {
      resource: data
    }
  }
}

export default ResourceDetail;
