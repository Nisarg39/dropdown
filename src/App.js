import { useState } from 'react';
import './App.css';
import ListItems from './ListItems';
function App() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("");
  const items = ["Yes" ,"Probably Not"]
  const changeName = async(itemName) => {
    setSelected(itemName)
  }
  return (
    <>

    <div className="App" style={{background: "lightblue" ,height: "200px", width: "50%", marginLeft: "25%", paddingTop: "2%"}}>
        <h1 className='text-black'>React Dropdown</h1>
          <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button" onClick={() => setShow(true)}>
            Dropdown button
          </button>
          <ul className="dropdown-menu">
          {show ? 
            items.map((item) => 
            <ListItems 
            item={item} 
            key={item}
            changeName = {changeName}
            />) : <label></label>}
          </ul>
        <div>
          <label style={{margin: "10px"}}>{selected}</label>
        </div>
        
    </div>
  
    </>
    
  );
}

export default App;
