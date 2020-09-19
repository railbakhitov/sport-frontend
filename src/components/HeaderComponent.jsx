import React, { Component } from 'react';
import RegistrationComponent from './RegistrationComponent';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          registrationIsOpen: false,
        }
    }

    handleRegistrationButton = () => {
      const state = this.state.registrationIsOpen;
      this.setState({registrationIsOpen: !state});
    }

    render() {
        return(       
          <div className="header">
            <span className="header__text">Хедер</span>
            <button onClick={this.handleRegistrationButton}>регистрация</button>
            {this.state.registrationIsOpen &&
              <RegistrationComponent/>
            }
          </div>
        )
    }
}

export default HeaderComponent;