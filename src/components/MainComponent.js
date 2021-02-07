import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import ExhibitInfo from './ExhibitInfoComponent';
import { EXHIBITS } from '../shared/exhibits';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exhibits: EXHIBITS,
      selectedExhibit: null
    };
  }

  onExhibitSelect(exhibitId) {
    this.setState({selectedExhibit: exhibitId});
}

  render() {
    return (
      <div>
        <Navbar style={{backgroundColor: '#000000'}}>
          <div className="container">
            <NavbarBrand style={{color: '#ffffff'}} href="/">Museum</NavbarBrand>
          </div>
        </Navbar>
        <Directory exhibits={this.state.exhibits} onClick={exhibitId => this.onExhibitSelect(exhibitId)}/>
        <ExhibitInfo exhibit={this.state.exhibits.filter(exhibit => exhibit.id === this.state.selectedExhibit)[0]}/>  
      </div>
    )
  }
}

export default Main;
