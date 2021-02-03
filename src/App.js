import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { EXHIBITS } from './shared/exhibits';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exhibits: EXHIBITS
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar style={{backgroundColor: '#000000'}}>
          <div className="container">
            <NavbarBrand style={{color: '#ffffff'}} href="/">Museum</NavbarBrand>
          </div>
        </Navbar>
        <Directory exhibits={this.state.exhibits}/>
      </div>
    )
  }
}

export default App;
