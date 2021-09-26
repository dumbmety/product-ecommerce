import CategoryLists from '../components/CategoryPreviews'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import ProductLists from '../components/ProductLists'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <ProductLists />
      <CategoryLists />
      <Footer />
    </>
  )
}
