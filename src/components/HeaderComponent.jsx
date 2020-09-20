import React, { Component } from 'react';
import RegistrationComponent from './RegistrationComponent';
import LoginComponent from './LoginComponent';
import Cookie from '../scripts/Cookie.js'
import logo from '../img/logo.png';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          registrationIsOpen: false,
          loginIsOpen: false,
          nameAuthorized: false,
        }
    }

    componentDidMount() {
      if (Cookie.getCookie("username")) {
        this.setState({nameAuthorized: Cookie.getCookie("username")});
      }
    }

    handleRegistrationButton = () => {
      const state = this.state.registrationIsOpen;
      this.setState({registrationIsOpen: !state});
    }

    handleLoginButton = () => {
      const state = this.state.loginIsOpen;
      this.setState({loginIsOpen: !state});
    }

    render() {
        return(       
          <div className="header">
            <a href="/" className="header__logo logo-container">
              <img className="logo-container__img" alt="logo" src={logo}/>
              <span className="logo-container__text">Спортивный портал республики Татарстан</span>
            </a>

            <div className="header__location">Казань</div>

            <ul className="header__list">
              <li className="header__item"><a href="#" className="header__link">О проекте</a></li>
              <li className="header__item"><a href="#" className="header__link">Новости</a></li>
              <li className="header__item"><a href="#" className="header__link">Вопросы</a></li>
              <li className="header__item"><a href="#" className="header__link">Контакты</a></li>
            </ul>

            <div className="header__buttons">
              {this.state.nameAuthorized === false &&
                <React.Fragment>
                  <button onClick={this.handleLoginButton}>войти</button>
                  <button onClick={this.handleRegistrationButton}>регистрация</button>
                </React.Fragment>
              }
              {this.state.nameAuthorized &&
                <p>{this.state.nameAuthorized}</p>
              }
            </div>


            {this.state.registrationIsOpen &&
              <RegistrationComponent/>
            }
            {this.state.loginIsOpen &&
              <LoginComponent/>
            }
          </div>
        )
    }
}

export default HeaderComponent;