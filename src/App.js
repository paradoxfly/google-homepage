import './index.css';

import Logo  from './Components/Logo'
import Search from './Components/Search'
import SearchButton from './Components/SearchButton';
import { useState } from 'react'

function App() {
  const [ state, setState ] = useState('')
  function handleChange(event){
    let value = event.target.value
    setState(value)
    console.log(state)
  }
  return (
      <div class="container">
        <Logo content = {state} />
        <Search onChange = { handleChange }/>
        <SearchButton />
      </div>
  );
}

export default App;
