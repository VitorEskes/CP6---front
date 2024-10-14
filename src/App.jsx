import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import CarouselComponent from './components/CarouselComponent';
import PriceTable from './components/PriceTable.jsx';
import ProductModal from './components/ProductModal.jsx'
import './styles.css';

function App() {
    return (
        <div>
            <Header />
            <CarouselComponent />
            <Products />
            <PriceTable />
            <ProductModal/>
            <Footer />
        </div>
    );
}

export default App;
