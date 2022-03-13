import React from 'react';
import './Question.css';

class Question extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div class="question">
                <p>{this.props.question}</p>
                <div class="answer">
                    <label for="g1_r1"><input type="radio" id="r1" name={this.props.name} value="0" onChange={this.props.handleChange} /><span> 没有</span></label>
                    <label for="g1_r2"><input type="radio" id="r2" name={this.props.name} value="1" onChange={this.props.handleChange} /><span> 很轻</span></label>
                    <label for="g1_r3"><input type="radio" id="r3" name={this.props.name} value="2" onChange={this.props.handleChange} /><span> 中等</span></label>
                    <label for="g1_r4"><input type="radio" id="r4" name={this.props.name} value="3" onChange={this.props.handleChange} /><span> 偏重</span></label>
                    <label for="g1_r5"><input type="radio" id="r5" name={this.props.name} value="4" onChange={this.props.handleChange} /><span> 严重</span></label>
                </div>
            </div>
        );
    }
}

export default Question;
