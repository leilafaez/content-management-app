import Layout from "@/components/Layout";
import ResourceHighlight from "@/components/ResourceHighlight";
import Newsletter from "@/components/Newsletter";
import ResourceList from "@/components/ResourceList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    
    <Layout>
    <ResourceHighlight/>
    <Newsletter/>
    <ResourceList/>
    <Footer/>
    </Layout>

   
  )
}
