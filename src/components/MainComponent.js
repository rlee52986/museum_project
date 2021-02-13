import { Component } from 'react';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { EXHIBITS } from '../shared/exhibits';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exhibits: EXHIBITS,      
    };
  }

  render() {

    const HomePage = () => {
      return (
        <Home />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/directory' render={() => <Directory exhibits={this.state.exhibits}/>} />
            <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
