import {useState} from 'react'

export const GroceryInput = ({GetItem}) =>  {

    const [item,setItems] = useState("")
    const handlechange = (e) => {
        setItems(e.target.value)
    }

    const handleclick = () => {
    GetItem(item)
    }

    
    return (
       <>
       <input type="text"  placeholder="Enter Your Grocery List" onChange={handlechange}/>
       <button onClick={handleclick}>Add to the List</button>
       
       
       </>
    )
}
