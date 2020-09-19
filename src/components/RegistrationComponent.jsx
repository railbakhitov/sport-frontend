import React, { Component } from 'react';
import ApiService from '../scripts/ApiService.js'
import InputComponent from "../components/service/InputComponent";
import FormControlComponent from "../components/service/FormControlComponent";

class RegistrationComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        }
    }

    send(data) {
        console.log(data);
        ApiService.registration(data)
            .then(res => {
                console.log(res);
            })
    }

    render() {
        return(       
          <div className="registration">
              <p>Регистрация</p>
              <FormControlComponent onSubmit={data => this.send(data)} render={
                        handleChange => (
                            <React.Fragment>
                                <InputComponent text="Имя" name="username" handleChange={handleChange} type="name" maxLength="20" placeholder="Ваше имя" required/>
                                <InputComponent text="Почта" name="email" handleChange={handleChange} type="email" maxLength="20" placeholder="Ваш e-mail" required/>
                                <InputComponent text="Пароль" name="password" handleChange={handleChange} type="password" maxLength="20" required/>
                                <InputComponent text="Повторите пароль" name="password-repeat" handleChange={handleChange} type="password" maxLength="20" required noPostValue/>
                                <button type="submit" className="button">Зарегистрироваться</button>
                            </React.Fragment>
                        )
                    }/>
          </div>
        )
    }
}

export default RegistrationComponent;