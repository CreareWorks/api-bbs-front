import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const urlAPI = "http://localhost/api/posts?page=1";
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios.get(urlAPI).then((res)=> {
      setDatas(res.data);
    })
  },[])
  console.log(datas);

  return (
    <div className="App">
      <h1>TOP</h1>
    </div>
  );
}

export default App;
