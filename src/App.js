import './index.css';

import Logo from './Components/Logo'
import Search from './Components/Search'
import SearchButton from './Components/SearchButton';
import React, { useState } from 'react'

// function App() {
//     const [state, setState] = useState('')
    
//     function handleChange(event) {
//         let value = event.target.value
//         setState(value)
//         console.log(state)
//     }
//     return ( 
//         <div className = "container" >
//             <Logo content = { state }/> 
//             <Search onInput = { handleChange }/> 
//             <SearchButton/>
//         </div>
//     );
// }

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
    

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value})
        console.log(this.state.value)
    }
    setValue(){
        return this.state.value
    }

    render() {
        return(
            <div className = "container" >
                <Logo content = { this.state.value }/> 
                <Search onChange = { this.handleChange }/> 
                <SearchButton/>
            </div>
        )
        
    }
}

export default App;