import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

const list = ['rice', 'beans', 'yam', 'semo']

class App extends Component {
    render(){
      return(
       <div className="App">
         
           {list.map (item =>
           <div> {item} </div> )}

         </div>

      )}
      
      
    }


export default App;
