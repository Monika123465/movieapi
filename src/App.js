import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState("")
  const [data, setData] = useState("")

  const handleClickInput = (e) => {
    setSearch(e.target.value)

  }
  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?t=${search}&apikey=c6c2b4a8`).then((res) =>setDatatgi(res.data))
  }, [search])
  if (!data) return
  return (
    < >
      <div>
        <input type='text' placeholder='search movie name' value={search} onInput={handleClickInput} />
        {data.map(el =>
          <p>{el.Title}</p>
        )}
      </div>
    </>
  );
}

export default App;
