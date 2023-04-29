import React from 'react';
import "./style.css"
const UseState = () => {
      const initialData=10;
      const [items, setItems]=React.useState(initialData);


  return (
    <>
       <div className='center_div'>
        <p>{items}</p>
        <div className='button2' onClick={()=>setItems(items + 1)} >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className='button2' onClick={()=>items <= 0  ? setItems(0):setItems(items - 1)} >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div>
       </div>

    </>
  )
}

export default UseState;
