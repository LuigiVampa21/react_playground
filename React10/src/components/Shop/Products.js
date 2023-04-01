import ProductItem from './ProductItem';
import classes from './Products.module.css';


const Products = (props) => {

  // console.log(props.cart);

  const DUMMY_PRODUCTS = [
    {
      id: 12,
      title: 'Test',
      price: 6,
      description: 'This is a first product - amazing!'
    },
    {
      id: 13,
      title: 'Test 2',
      price: 12,
      description: 'This is a different product - amazing!'
    }
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
        // {props.cart.map(product => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </ul>
    </section >
  );
};

export default Products;
