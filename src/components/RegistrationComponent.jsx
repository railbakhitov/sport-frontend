import React, { Component } from 'react';
import ApiService from '../scripts/ApiService.js'
import InputComponent from "../components/service/InputComponent";
import FormControlComponent from "../components/service/FormControlComponent";

class RegistrationComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isRegistrationComplete: false,
        }
    }

    send(data) {
        console.log(data);
        ApiService.registration(data)
            .then(res => {
                console.log(res);
                this.setState({isRegistrationComplete: true})
            })
    }

    render() {
        return(       
            <React.Fragment>
                {this.state.isRegistrationComplete == false &&
                <div className="registration">
                    <p>Регистрация</p>
                    <FormControlComponent onSubmit={data => this.send(data)} render={
                                handleChange => (
                                    <React.Fragment>
                                        <InputComponent text="Логин" name="username" handleChange={handleChange} type="name" maxLength="20" required/>
                                        <InputComponent text="Имя" name="firstName" handleChange={handleChange} type="name" maxLength="20" placeholder="Ваше имя" required/>
                                        <InputComponent text="Фамилия" name="middleName" handleChange={handleChange} type="name" maxLength="20" placeholder="Ваша фамилия" required/>
                                        <InputComponent text="Почта" name="email" handleChange={handleChange} type="email" maxLength="20" placeholder="Ваш e-mail" required/>
                                        <InputComponent text="Пароль" name="password" handleChange={handleChange} type="password" maxLength="20" required/>
                                        {/* <InputComponent text="Повторите пароль" name="password-repeat" handleChange={handleChange} type="password" maxLength="20" required noPostValue/> */}
                                        <button type="submit" className="button">Зарегистрироваться</button>
                                    </React.Fragment>
                                )
                            }/>
                </div>
                }
                {this.state.isRegistrationComplete == true &&
                    <div className="registration-complete">
                        <p className="registration-complete__text">Регистрация прошла успешно</p>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default RegistrationComponent;