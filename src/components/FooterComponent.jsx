import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
    }

    render() {
        return(        
            <div className="footer">
                <p className="footer__text">Футер</p>
            </div>
        )
    }
}

export default FooterComponent;