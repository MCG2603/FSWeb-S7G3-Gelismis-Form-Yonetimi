import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Form } from './components/Form';


function App() {
  let[uyeler,setUyeler]=useState ([]);
  const [editId,setEditId]=useState (null);
  const handleEdit=(id)=>{
    console.log(id);
    setEditId(id);
  }
  return (
    <div className="App">
     <Form uyeler={uyeler} setUyeler={setUyeler} editId={editId} setEditId={setEditId} />
     {uyeler.map((uye)=>
     (
      <div key={uye.id}>
        <span>
          {uye.firstName + " " + uye.lastName}
        </span>
        <span>
        <button onClick={()=>handleEdit(uye.id)}>
           
           Düzelt
           </button>
        </span>
        </div>
     )
  )};
  </div>
)
     }

export default App;
