import CategoryLists from '../components/CategoryPreviews'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import ProductLists from '../components/ProductLists'
import PromoSection from '../components/PromoSection'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <ProductLists />
      <CategoryLists />
      <PromoSection />
      <Footer />
    </>
  )
}
