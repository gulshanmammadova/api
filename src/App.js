import { useEffect, useState } from 'react';
import CSSProperties from 'react'
import axios from 'axios'
import './App.css';
import Search from './Search';
import ClipLoader from "react-spinners/ClipLoader"
const override :CSSProperties= {
  display: "block",
  position:'absolute',
  top:'50%',
  left:"50%"
};
function App() {

  let [loading, setLoading] = useState(true);
  const [users,setUsers]=useState([]);
const[value,setValue]=useState('');
  useEffect(()=>{
    const getUsers=async()=>{
      const res=await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(res.data);
      setUsers(res.data);
      setLoading(false);
     }
    getUsers()},[]
  );
  
  const InputHandler=(e)=>{
setValue(e.target.value);
  }
  const filteredUser=users.filter(u=>u.name.toLowerCase().includes(value.toLowerCase()))
  
  return (
    <div className="App">
   {
    loading ?   <ClipLoader
    loading={loading}
    position='absolute'
    cssOverride={override}
    size={50}
    transform='translate(-50%,-50%)'
    aria-label="Loading Spinner"
    data-testid="loader"
     />
     :   <div className="input-group mb-3 my-4 container">
     <input onChange={InputHandler} type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
     <Search filteredUser={filteredUser}/>
       </div>
   }
  
    </div>

  );
}

export default App;
