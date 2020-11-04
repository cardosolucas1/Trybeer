import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BeerCard from '../BeerCard';
import BeerContext from '../../Context/BeerContext/BeerContext';
import Header from '../../Components/Header';
import RowContainer from '../CSS/RowContainer';
import Slide from '../Slide';
import Footer from '../Footer';
import Cart from '../../Components/Cart';

const ProductsPage = () => {
  const { products = [] } = useContext(BeerContext);

  return (
    <div className="products-list">
      <Header
        title="TryBeer"
        buttons={[
          { name: 'Perfil', link: '/profile' },
          { name: 'Pedidos', link: '/orders' },
          { name: 'Sair', link: '/' },
        ]}
      />
      <Slide />
      <RowContainer>
        {products.map(({
          id, name, price, urlImage, quantity,
        }, index) => (
          <BeerCard
            id={ id }
            productName={ name }
            price={ price }
            imageURL={ urlImage }
            initialQuantity={ quantity }
            index={ index }
            key={ index}
          />
        )) }
      </RowContainer>
       <Link to="/checkout">
        <Cart />
      </Link>
      <Footer />
    </div>
  );
};

export default ProductsPage;
