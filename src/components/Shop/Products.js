import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: ' Book',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolor.',
  },
  {
    id: 'p2',
    price: 5,
    title: 'computer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolor.Lorem ipsum dolor sit amet.',
  },
  {
    id: 'p3',
    price: 15,
    title: 'phone',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nulla eum, doloremque reprehenderit explicabo ea eligendi fuga repellendus dolores provident?',
  },
  {
    id: 'p4',
    price: 20,
    title: 'Graphic card',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, iusto.',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};
export default Products;
