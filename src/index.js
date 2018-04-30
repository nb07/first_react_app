// import react and react dom
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

// COMPONENTS
import Header from './components/header';
import NewsList from './components/news_list'

// making a function that will be rendered
class App extends Component {

  state = {
    news: JSON
  }

  render(){
    return (
      <div>
        <Header/>
        <NewsList news={this.state.news}/>
      </div>
    );
  }0

}

// rendering the 'app' funtion in the root div. 
ReactDOM.render(<App/>,document.querySelector('#root'));