import React, { Component } from 'react';
import ApiService from '../scripts/ApiService.js'
import InputComponent from "../components/service/InputComponent";
import FormControlComponent from "../components/service/FormControlComponent";
import NoticeComponent from "../components//NoticeComponent";
import '../css/authorization.css';

class RegistrationComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="wrapper">
                <div className="authorization">
                    <div className="authorization__header">Авторизация</div>
                    <form>
                        <div className="form-group">
                            <label className="text">Имя</label>
                            <input type="text" placeholder="Ваше имя" className="form-control form-control-sm" />
                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyoneelse.</small> */}
                        </div>
                        <div className="form-group">
                            <label className="text">Пароль</label>
                            <input type="password" className="form-control form-control-sm" />
                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyoneelse.</small> */}
                        </div>
                        <div className="form-group"><button type="submit" className="btn btn-primary btn-authorization">Войти</button></div>
                        <div style={{ textAlign: "center" }}>
                            <span style={{ fontSize: '12px', color: '#9F9F9F' }}>У вас нет учетной записи?</span>
                            <a href="#" className="link">Зарегистрироваться</a>
                        </div>
                    </form>
                </div>
                <div className="image">
                    <img src="background-auth.png" height="770" width="700" />
                </div>
            </div>
        )
    }
}

export default RegistrationComponent;