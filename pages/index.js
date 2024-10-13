import Layout from '../components/Layout'
import Hero from '../components/Hero'
import SupportSection from '../components/SupportSection'
import CovidInfo from '../components/CovidInfo'
import ProductSection from '../components/ProductSection'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <SupportSection />
      <CovidInfo />
      <ProductSection />
    </Layout>
  )
}