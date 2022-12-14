import { useState } from 'react';
import './App.css';
import Card from './card/Card';
import Submited from './card/Submited'
function App() {
  const [thanYou , setThankYou] =useState(false)
  const [rating , setRating] = useState( )
  
  return (
    <div  className='mainCont'>
      {!thanYou ? <Card rating={rating} setRating={setRating} thankyou={thanYou} setThankYou={setThankYou} /> : <Submited rating={rating}/>}
    </div>
  );
}

export default App;
