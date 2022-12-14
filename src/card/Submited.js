import './Submited.css'
import subIcon from './images/illustration-thank-you.svg';
import { useState } from 'react';
import Card from './Card';

function Submited(prop){
 
    return(
        <div className='mainSubCont'>
            <div className='mainSubImg'>
                <img src={subIcon}/>
            </div>
            <div className='rating'>

                <p>You selected {prop.rating} out of 5</p>
            </div> 
            <div className='subText'>
                <h1>Thank you</h1>
                <p className='subP'>
                We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
                </p>
            </div>
        </div>
    )
}


export default Submited;