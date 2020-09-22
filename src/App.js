import React from 'react';
import './style.less';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent.jsx'
import MainPageComponent from './components/MainPageComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'
import RegistrationComponent from './components/RegistrationComponent';
import AuthorizationComponent from './components/AuthorizationComponent';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/registration" component={RegistrationComponent} />
        <Route path="/authorization" component={AuthorizationComponent} />
        {/* <div className="wrapper"> */}
          {/*      <HeaderComponent /> */}
{/*           <div className="main">
            <div className="main__content"> */}
              <Switch>
                <Route path="/" exact component={MainPageComponent} />
              </Switch>
{/*             </div>
          </div>
        </div> */}

        <FooterComponent />
      </Router>
    );
  }

}

export default App;
