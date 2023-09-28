import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


function Todo() {

    const [Value , setValue] = useState("")
    const [taskarry, setTaskarry] = useState([])

    const task = (e) =>{setValue(e.target.value)
    }

    const tasklist = () => {
        setTaskarry([...taskarry, Value]);
        console.log(taskarry)
        setValue('')
    }

    const deleteitem = (id) =>{
        const updatedlist = taskarry.filter((val, ind) => {
            return ind !== id;
        });
        setTaskarry(updatedlist)
    }

    function deletealliteam(){
        setTaskarry([])
    }

  return (
    <div className='todoapp'>
    <h2>My Todo List</h2>
    
    <input type="text" className='input' value={Value} onChange={task}/>

    <button className='add-btn' onClick={tasklist}><FontAwesomeIcon className='plus-icon' icon={faPlus}/> </button>

    <div className='list-items'>
        {
            taskarry.map((val, ind)=>(
                <div className='list-item' key={ind}>
            <p key={ind}>{ind +1}. {val}</p>
            <button className='delete-btn'  onClick={()=>deleteitem(ind)}><FontAwesomeIcon className='trash-icon' icon={faTrash}/></button>
            </div>
            
             ))
             }

           {
           taskarry.length > 0 && (
            <button className='delete-all-btn' onClick={deletealliteam}>Delete All</button>
          )}
          
        
        
    </div>
    </div>
    )
            }
export default Todo