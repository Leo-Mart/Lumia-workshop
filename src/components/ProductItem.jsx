import { useState } from 'react';
import { Modal } from './Cart';

function ProductItem(props) {
  const [showModal, setShowModal] = useState(false);
  const { name, description, cost, image } = props.product;

  {
    /*} Funktionen som körs när användaren klickar på "Köp"-knappen.*/
  }
  const handleOpenModal = () => {
    setShowModal(true);
    console.log(`Köp förfrågan för ${name}, kostnad: ${cost} kr`);
    {
      /*Här kan du lägga till logik för vad som ska hända när knappen klickas,
  // exempelvis att lägga till produkten i en kundvagn.*/
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal show={showModal} onClose={handleCloseModal}></Modal>
      <li className='product' key={name}>
        {name} <br />
        {description} <br />
        {/* Bind "handlePurchaseClick" funktionen till onClick eventet av knappen */}
        <button onClick={handleOpenModal}>Köp för {cost} kr</button>
        <div className='image-container'>
          <img src={image} alt={name}></img>
        </div>
        {/* Lägg till alt attribut för tillgänglighet */}
      </li>
    </>
  );
}

export default ProductItem;
