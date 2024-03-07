import Searchbar from './Searchbar.jsx';
import ProductItem from './ProductItem.jsx';
import { useContext } from 'react';
import { LampsContext } from '../Context/LampsContext.jsx';

function Productslist() {
  const { lamp, setLamps } = useContext(LampsContext);
  console.log(lamp);
  return (
    <>
      <div className='page'>
        <Searchbar />

        <ul className='product-list'>
          {lamp.map((lamp) => (
            <ProductItem key={lamp.name} product={lamp} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Productslist;
