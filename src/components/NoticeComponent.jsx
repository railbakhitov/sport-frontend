import React, { Component } from 'react';

class NoticeComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            texts: {},
        }

        this.container = React.createRef();
    }

    componentDidMount() {
        let texts = {title: "", text: ""};
        if (this.props.type === "registration") {
            texts.title = "Ура!";
            texts.text = "Регистрация прошла успешно. Вернитесь на главную, чтобы продолжить свои действия."
            this.container.current.classList.add("notice__container--succes");
        }
        if (this.props.type === "error") {
            texts.title = "Ой...";
            texts.text = "К сожалению, произошла ошибка. Вы ни в чем не виноваты, это все мы."
            this.container.current.classList.add("notice__container--error");
        }

        this.setState({texts: texts})
    }

    render() {
        return(       
            <div className="notice">
                <div className="notice__background"></div>
                <div className="notice__container" ref={this.container}>
                    <h3 className="notice__title">{this.state.texts.title}</h3>
                    <p className="notice__text">{this.state.texts.text}</p>
                    <a href="/" className="notice__button button">На главную</a>
                </div>
            </div>
        )
    }
}

export default NoticeComponent;