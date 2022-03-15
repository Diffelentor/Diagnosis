import React from 'react';
import './Button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClickbtn() {
        window.location.href = "http://www.baidu.com"
    }
    render() {
        return (
            <div class="submit">
                <button type="submit" onClick={this.handleClickbtn}>下一步：问 答 测 试</button>
            </div>
        );
    }
}

export default Button;