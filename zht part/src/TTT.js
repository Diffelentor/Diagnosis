import React from 'react';
import './TTT.css';
class TTT extends React.Component {
    render() {
        return (
            <div>
                <img src="./步骤1.png" alt=""></img>
                <div class="infomation">
                    <h1>SCI-90量表</h1>
                    <p class="description"><b>说明：</b>下面有90条测验项目，列出了有些人可能会有的问题，请仔细地阅读每一条，然后根据最近一星期以内，您的实际感觉，选择适合的答案点击，请注意不要漏题。</p>
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}

export default TTT;
