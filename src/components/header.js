import React, { Component } from 'react';
import '../css/styles.css'

class Header extends Component {

  state = {
    keywords: ''
  }

  inputChangeHandler = (event) => {
    const value = event.target.value === '' ? 'active' : 'non-active'
    this.setState({
      keywords: event.target.value
    });
  }

  render(){ 

    return (
      <header>
        <div 
          className='logo'>Logo</div>
        <input type='text' onChange={this.inputChangeHandler.bind(this)}/>
      </header> 
    )
  }
}

export default Header;