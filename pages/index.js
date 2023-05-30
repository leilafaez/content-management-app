import Layout from "@/components/Layout";
import ResourceHighlight from "@/components/ResourceHighlight";
import Newsletter from "@/components/Newsletter";
import ResourceList from "@/components/ResourceList";
import Footer from "@/components/Footer";


export default function Home({resources}) {
  return (

    <Layout>
    <ResourceHighlight resources={resources}/>
    <Newsletter/>
    <ResourceList resources={resources}/>
    <Footer/>
    </Layout>

   
  )
}

export async function getStaticProps(){
  const resData = await fetch("http://localhost:3000/api/resources");
  const data = await resData.json();
  return{
    props:{
      resources:data
    }
  }
}