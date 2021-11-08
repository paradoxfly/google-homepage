import './index.css';

import Logo from './Components/Logo'
import Search from './Components/Search'
import SearchButton from './Components/SearchButton';
import React from 'react'

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