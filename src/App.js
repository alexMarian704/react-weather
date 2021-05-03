import './css/index.css'
import useFetch from './hooks/useFetch'
import { useState } from 'react'
import urls from './data/data'
import Test from './components/test';

function App() {
  const [test, setTest] = useState(1);
  const { firstUrl } = urls('Bucharest')
  const { data , isLoading , error } = useFetch(test, firstUrl);

  return (
    <div className="App">
      <h1>Hello</h1>
      {data && <h2>{data.coord.lat}</h2>}
      {data && <Test render={data}/>}
      <button onClick={() => { setTest(test + 1) }}>{test}</button>
    </div>
  );
}

export default App;
