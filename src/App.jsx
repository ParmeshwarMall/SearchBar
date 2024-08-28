import { useState } from 'react';
import './App.css';

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [data, setData] = useState([
    'apple',
    'ape',
    'mango',
    'banana',
    'orange',
  ]);

  const handleInput=(e)=>{
    setSearchItem(e.target.value);
  }

  const filterData=data.filter(item=>
    item.toLowerCase().includes(searchItem.toLowerCase())
  )


  return (
    <>
      <div>
        <h1>Search</h1>
        <input 
          type="text" 
          value={searchItem} 
          onChange={handleInput} 
          placeholder="Search for a fruit..."
          style={{height:"20px"}}
        />

        <ul>
          {filterData.map((item,index)=>(
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>
    </>
  );
}

export default App;
