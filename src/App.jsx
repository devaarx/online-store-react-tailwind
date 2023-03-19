import Header from './components/Header'
import HomeIntro from './components/HomeIntro'
import Navbar from './components/Navbar'
import ProductFilter from './components/ProductFilter'
import ProductGrid from './components/ProductGrid'

function App() {
    return (
        <div className='relative'>
            <Header />
            <HomeIntro />
            <ProductFilter />
            <ProductGrid />
            <Navbar />
        </div>
    )
}

export default App
