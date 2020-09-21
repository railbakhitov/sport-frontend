import React, { Component } from 'react';

class InputComponent extends Component {
	constructor(props) {
		super(props);
		this.label = React.createRef();
		this.input = React.createRef();
		this.state = { isPassword: true };
	}

	componentDidMount() {
		this.setValue(); // устанавливает значение по умолчанию (если есть)
		if (this.props.readonly) {
			this.input.current.readOnly = true;
		}
		if (this.props.required) {
			this.input.current.required = true;
		}
	}

	setValue() {
		if (this.props.value) {
			this.input.current.value = this.props.value;
			this.active();
			this.props.handleChange(this.input.current.id, this.props.value);
		}
	}

	active = (e) => {
		this.label.current.classList.add("input-container__label--active");
		this.label.current.classList.add("label--active");
	}

	blur = (e) => {
		if (!e.target.value) {
			this.label.current.classList.remove("input-container__label--active");
			this.label.current.classList.remove("label--active");
		}
	}

	onChange = (e) => {
		if (!this.props.noPostValue)
			this.props.handleChange(this.props.name, e.target.value)
	}

	onClickLink = () => {
		this.setState((state) => ({ isPassword: !state.isPassword }));
		// TODO показ пароля
	} 

	render() {
		return (
			<div className="form-group" style={this.props.style}>
				<label ref={this.label} htmlFor={this.props.name} className="text">{this.props.text}</label>
				<input ref={this.input} type={this.props.type} id={this.props.name} className="form-control form-control-sm" maxLength={this.props.maxLength} onChange={(e) => this.onChange(e)} onFocus={this.active} onBlur={this.blur} autoComplete={this.props.autoComplete} placeholder={this.props.placeholder} />
				{
					this.props.type == "password" && <a href="#" className="password-control" onClick={this.onClickLink}></a>
				}
			</div>
		)
	}
}

export default InputComponent