import React, {
  useState, useEffect, useContext, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import BeerContext from '../../Context/BeerContext/BeerContext';
import './styles.css';
import {
  addProductToLocalStorage,
  updateProductInLocalStorage,
  getProductsLocalStorage,
} from '../../utils/localStorage';
import BeerCardContainer from '../CSS/BeerCard';
import ProductSleketon from '../Skeleton/ProductSleketon';

const BeerCard = ({
  id,
  productName,
  price,
  imageURL,
  initialQuantity,
  index,
}) => {
  const sumQuantity = 1;
  const discountValue = 0.5;
  const zero = 0;
  const [quantity, setQuantity] = useState(initialQuantity);
  const { setTotal } = useContext(BeerContext);
  const [loading, setLoading] = useState(true);

  const memorizedQuantity = useCallback((sumValue) => {
    setTotal((currentTotal) => {
      const total = currentTotal + sumValue * price;
      return total >= zero ? total : zero;
    });
    setQuantity((currentValue) => {
      const calculateQuantity = currentValue + sumValue;
      if (calculateQuantity >= 1) {
        addProductToLocalStorage({
          id,
          productName,
          price,
          imageURL,
          quantity: calculateQuantity,
        });
        return calculateQuantity;
      }
      updateProductInLocalStorage(productName, zero);
      return zero;
    });
  }, [id, imageURL, price, productName, setTotal]);

  useEffect(() => {
    const saveProducts = getProductsLocalStorage('cart');
    saveProducts.forEach(({ productName: name, quantity: actualQuantity }) => {
      if (name === productName) {
        memorizedQuantity(actualQuantity);
      }
    });
  }, [memorizedQuantity, productName]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [])

  if (loading) return <ProductSleketon />
  return (
    <BeerCardContainer className="product">
      <div className="product-values">
        <div>
          <span
            data-testid={ `${index}-product-price` }
            className="original-product-price"
          >
            R$
            { ` ${price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}` }
          </span>
          <span
            className="product-price"
          >
            R$
            { ` ${(price - price * discountValue).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
          </span>
        </div>
        <span className="discount">-50%</span>
      </div>
      <div className="product-img">
        <img
          data-testid={ `${index}-product-img` }
          src={ imageURL }
          alt={ `imagem de um ${productName}` }
          width="100px"
        />
      </div>
      <div className="product-name">
        <span data-testid={ `${index}-product-name` }>{ productName }</span>
      </div>
      <div className="quantity-container">
        <label htmlFor="add">
          Adicionar
          <input
            data-testid={ `${index}-product-plus` }
            id="add"
            type="button"
            className="qty-button qty-button-plus"
            onClick={ () => memorizedQuantity(sumQuantity) }
          />
        </label>
        <span data-testid={ `${index}-product-qtd` } className="product-quantity">{ quantity }</span>
        <label htmlFor="remove">
          Remover
          <input
            data-testid={ `${index}-product-minus` }
            id="remove"
            type="button"
            className="qty-button qty-button-subtract"
            onClick={ () => memorizedQuantity(-sumQuantity) }
          />
        </label>
      </div>
    </BeerCardContainer>
  );
};

BeerCard.propTypes = {
  id: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  initialQuantity: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default BeerCard;
