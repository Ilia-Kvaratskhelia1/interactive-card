import './Card.css';
import starIcon from './images/icon-star.svg';
import Submited from './Submited';
import { useState } from 'react';

function Card({thankyou , setThankYou , rating , setRating}) {
    const [choesebtn, setChooseBtn] = useState()
   
    const submitHandler = ()=>{
        setThankYou(true)
    }
    
    const Buttons = [1, 2, 3, 4, 5]
    return (
        <div className='mainCard'>
            <div className='starIconCont'>
                <img src={starIcon} title="Star" />
            </div>
            <div className='mainTextArea'>
                <h1>How Did We Do?</h1>
                <p> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>


            <div className='ClickSection'>
                <div className='numbers'>
                    {Buttons.map((number)=>{ 
                            return (
                                <buttons className="btn"
                                onClick={(()=>{setChooseBtn(number);setRating(number)})}
                                style={{background:  choesebtn === number ?"#FC7614": "" , color:choesebtn===number ?"white": " " }}
                                >{number}</buttons>
                            )
                    })}

                </div>
                <div className='buttonSect'>
                    <button type='submit'  onClick={()=>submitHandler()}>Submit</button>
                </div>
            </div>
        </div>
    )
}



export default Card;