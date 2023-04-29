import events from 'inquirer/lib/utils/events';
import React,{useState} from 'react';
import "./style.css"


const Todo = () => {
    const [inputData,setInputData]=useState("")
    const [items,setItems]=useState([])
    const addItems=()=>{
        if(!inputData){
            alert("plz fill the data")
            
        }
        else{
            const newInputData={
                id:new Date().getTime().toString(),
                name:inputData
            }
            setItems([...items,newInputData])
            setInputData("")

        }
    }
    const deleteItem=(index)=>{
        const updatedItems=items.filter((currentEele) =>{
            return currentEele.id !== index
        
        })
        setItems(updatedItems)


    }
  return (
    <>
    <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src="./images/todo.svg" alt="todologo" />
                <figcaption>Add your list  here</figcaption>
            </figure>
            <div className='addItems'>
                <input type="text" placeholder=' add item' className='form-control' value={inputData} onChange={(events)=> setInputData(events.target.value)} />
                <i class="fa fa-plus" aria-hidden="true" onClick={addItems}></i>

            </div>
            <div className='showItems'>
                {items.map((currentEele)=>{
                    return(
                    <div className='eachItem' key={currentEele.id}>
                        <h3>{currentEele.name}</h3>
                    <div className='todo-btn'>
                       
                       <i className="far fa-trash-alt" aria-hidden="true" onClick={()=>deleteItem(currentEele.id)}></i>
                    </div>
                   </div>
                   

                    )

                })}
            </div>
            <div className='showItems'>
                <button className='btn efffet04' data-sm-link-text="Remove All" >
                    <span>CHECK LIST</span>
                </button>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Todo
