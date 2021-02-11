import { Component } from 'react';
import Directory from './DirectoryComponent';
import ExhibitInfo from './ExhibitInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
        <Header />
        <Directory exhibits={this.state.exhibits} onClick={exhibitId => this.onExhibitSelect(exhibitId)}/>
        <ExhibitInfo exhibit={this.state.exhibits.filter(exhibit => exhibit.id === this.state.selectedExhibit)[0]}/>  
        <Footer />
      </div>
    )
  }
}

export default Main;
