import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar style={{backgroundColor: '#000000'}}>
          <div className="container">
            <NavbarBrand style={{color: '#ffffff'}} href="/">Museum</NavbarBrand>
          </div>
        </Navbar>
        <Directory />
      </div>
    )
  }
}

export default App;
