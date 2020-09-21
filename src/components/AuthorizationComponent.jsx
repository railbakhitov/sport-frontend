import React, { Component } from 'react';
import ApiService from '../scripts/ApiService.js'
import InputComponent from "../components/service/InputComponent";
import FormControlComponent from "../components/service/FormControlComponent";
import NoticeComponent from "../components//NoticeComponent";
import '../css/authorization.css';
import background from '../img/background-auth.png';

class RegistrationComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <FormControlComponent onSubmit={data => this.send(data)} render={
                handleChange => (
                    <React.Fragment>
                        <div className="wrapper">
                            <div className="authorization">
                                <div className="authorization__header">Авторизация</div>
                                    <InputComponent text="Имя" placeholder="Ваше имя" style={{ marginTop: '30px' }} name="firstname" handleChange={handleChange} type="name" maxLength="20" required />
                                    <InputComponent text="Пароль" type="password" style={{ position: 'relative' }} handleChange={handleChange} maxLength="20" required />
                                    <div className="form-group"><button type="submit" className="btn btn-primary btn-authorization">Войти</button></div>
                                    <div style={{ textAlign: "center" }}>
                                        <span style={{ fontSize: '12px', color: '#9F9F9F' }}>У вас нет учетной записи?</span>
                                        <a href="#" className="link">Зарегистрироваться</a>
                                    </div>
                            </div>
                            <div className="image">
                                <img src={background} height="770" width="700" />
                            </div>
                        </div>
                    </React.Fragment>
                )
            } />

        )
    }
}

export default RegistrationComponent;