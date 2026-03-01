import './App.css';
import { useState } from 'react';

const Grocery =  () => {
    const [item, typeItem] = useState('');
    const [list, setList] = useState([]);
    const [newId, giveNewId] = useState(1);
    const handleSubmission = (e) => {
        e.preventDefault();
        const newItem = { item };
        list.push({name:item, id:newId});
        giveNewId(newId + 1);
        setList(list);
    }
    
    // const handleAdd = (itemName) => {
    //     newItem = {name:itemName, id:newId}
    //     const newList = list.push(newItem)
    //     giveNewId(newId + 1)
    //     setList(newList)
    // }
    const handleDelete = (id) => {
        const newList = list.filter(listItem => listItem.id !== id);
        setList(newList);
    }

    return (
    <>
    <form onSubmit={handleSubmission}>
        <label>Enter grocery item:</label>
        <input type="text" value={item}
            onChange={(e) => typeItem(e.target.value)}/>
        <button>Add Item</button>
    </form>

    <ul className="grocery-list">
        {list.map((listItem) => (
            <li className="list-item" key={listItem.id}>
                {listItem.name}
                <button className="deleteBtn" onClick={() => handleDelete(listItem.id)}>X</button>
            </li>
        ))}
    </ul>
    </>
    );
}

export default Grocery;