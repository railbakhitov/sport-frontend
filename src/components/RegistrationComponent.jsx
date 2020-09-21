import React, { Component } from 'react';
import ApiService from '../scripts/ApiService.js'
import InputComponent from "../components/service/InputComponent";
import FormControlComponent from "../components/service/FormControlComponent";
import NoticeComponent from "../components//NoticeComponent";
import '../css/registration.css';

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
            <div className="wrapper">
            <div className="registration">
                <div className="registration__header">Регистрация</div>
                <form style={{marginTop: '30px'}}>
                    <div className="form-group">
                        <label className="text">Имя</label>
                        <input type="text" placeholder="Ваше имя" className="form-control form-control-sm" />
                        {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyoneelse.</small> */}
                    </div>
                    <div className="form-group">
                        <label className="text">Фамилия</label>
                        <input type="text" placeholder="Ваша фамилия" className="form-control form-control-sm" />
                        {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyoneelse.</small> */}
                    </div>
                    <div className="form-group">
                        <label className="text">Почта</label>
                        <input type="email" placeholder="Ваш e-mail" className="form-control form-control-sm" />
                        {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyoneelse.</small> */}
                    </div>
                    <div className="form-group" style={{position: 'relative'}}>
                        <label className="text">Пароль</label>
                        <input type="password" className="form-control form-control-sm" />
                        <a href="#" className="password-control"></a>
                        {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyoneelse.</small> */}
                    </div>
                    <div className="form-group" style={{position: 'relative'}}>
                        <label className="text">Повторите пароль</label>
                        <input type="password" className="form-control form-control-sm" />
                        <a href="#" className="password-control"></a>
                        {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyoneelse.</small> */}
                    </div>
                    <div className="form-group">
                        <label className="text">Ваши предпочтения</label>
                        <div className="sport-container">
                            <button type="button" className="btn btn-outline-primary btn-sm">Хоккей</button>
                            <button type="button" className="btn btn-outline-primary btn-sm">Футбол</button>
                            <button type="button" className="btn btn-outline-primary btn-sm">Баскетбол</button>
                            <button type="button" className="btn btn-outline-primary btn-sm">Волейбол</button>
                            <button type="button" className="btn btn-outline-primary btn-sm">Теннис</button>
                        </div>
                        <div className="sport-container">
                            <button type="button" className="btn btn-outline-primary btn-sm">Плавание</button>
                            <button type="button" className="btn btn-outline-primary btn-sm">Гимнастика</button>
                            <button type="button" className="btn btn-outline-primary btn-sm">Бокс</button>
                            <button type="button" className="btn btn-outline-primary btn-sm">Дзюдо</button>
                            <button type="button" className="btn btn-outline-primary btn-sm">Алтлетика</button>
                        </div>
                    </div>
                    <div className="role-container">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label">Участник</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label">Организатор</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label">Исполнитель</label>
                          </div>
                    </div>
                    <div className="form-group"><button type="submit"
                            className="btn btn-primary btn-registration">Зарегистрироваться</button></div>
                    <div style={{ textAlign: "center"}}>
                        <span style={{fontSize: "12px", color: "#9F9F9F"}}>Уже есть аккаунт?</span>
                        <a href="#" className="link">Войти</a>
                    </div>
                </form>
            </div>
            <div className="image">
                <img src="/sport-frontend\src\img\background-auth.png" height="770" width="700" />
            </div>
        </div>
        )
    }
}

export default RegistrationComponent;