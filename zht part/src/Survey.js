import React from 'react';
import Question from './Question';
import './Survey.css'
import $ from 'jquery';

class Survey extends React.Component {
    constructor(props) {
        super(props);
        this.state = { q1: 0, q2: 0, q3: 0, q4: 0, q5: 0 };

        this.change = this.change.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {


        //     const url = 'https://arctic-backend-silly-cassowary.cfapps.eu10.hana.ondemand.com/api/v1/feedback/create';

        let result = { id: 1 };

        const q1 = { question: 1, answer: this.state.q1 };
        const q2 = { question: 2, answer: this.state.q1 };
        const q3 = { question: 3, answer: this.state.q1 };
        const q4 = { question: 4, answer: this.state.q1 };
        const q5 = { question: 5, answer: this.state.q1 };

        result.answers = [q1, q2, q3, q4, q5];

        var jsonData = JSON.stringify(result);

        console.log(jsonData);

        //     $.ajax({
        //         url: url,
        //         type: "POST",
        //         contentType: "application/json",
        //         dataType: "json",

        //         data: jsonData,
        //         success: function (data) {

        //             console.log("success" + data);
        //             alert("Successfully submited!");
        //         },
        //         error: function (e) {
        //             console.log("error: " + e);
        //         }
        //     });

        //     event.preventDefault();
    }

    change(event) {

        console.log(event.target.name); //g1
        console.log(event.target.value); //0

        switch (event.target.name) {
            case 'g1':
                this.setState({ q1: event.target.value });
            case 'g2':
                this.setState({ q2: event.target.value });
            case 'g3':
                this.setState({ q3: event.target.value });
            case 'g4':
                this.setState({ q4: event.target.value });
            case 'g5':
                this.setState({ q5: event.target.value });
            default:
        }
    }
    handleClickbtn() {
        const w = window.open('about:blank');
        w.location.href = "http:www.baidu.com"
        // window.location.href = "http://www.baidu.com"
        // let result = { id: 1 };

        // const q1 = { question: 1, answer: this.state.q1 };
        // const q2 = { question: 2, answer: this.state.q1 };
        // const q3 = { question: 3, answer: this.state.q1 };
        // const q4 = { question: 4, answer: this.state.q1 };
        // const q5 = { question: 5, answer: this.state.q1 };

        // result.answers = [q1, q2, q3, q4, q5];

        // var jsonData = JSON.stringify(result);

        // console.log(jsonData);
    }
    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <br />
                <div class="formlate">
                    <br /><br />
                    <Question id="1" question=". 头痛。 " name="g1" handleChange={this.change} />
                    <Question id="2" question=". 神经过敏，心中不踏实。 " name="g2" handleChange={this.change} />
                    <Question id="3" question=". 头脑中有不必要的想法或字句盘旋。 " name="g3" handleChange={this.change} />
                    <Question id="4" question=". 头晕和昏倒。 " name="g4" handleChange={this.change} />
                    <Question id="5" question=". 对异性的兴趣减退。 " name="g5" handleChange={this.change} />
                    <Question id="6" question=". 对旁人责备求全。 " name="g6" handleChange={this.change} />
                    <Question id="7" question=". 感到别人能控制您的思想。 " name="g7" handleChange={this.change} />
                    <Question id="8" question=". 责怪别人制造麻烦。 " name="g8" handleChange={this.change} />
                    <Question id="9" question=". 忘记性大。 " name="g9" handleChange={this.change} />
                    <Question id="10" question=". 担心自己的衣饰整齐及仪态的端正。 " name="g10" handleChange={this.change} />
                    <Question id="11" question=". 容易烦恼和激动。 " name="g11" handleChange={this.change} />
                    <Question id="12" question=". 胸痛。 " name="g12" handleChange={this.change} />
                    <Question id="13" question=". 害怕空旷的场所或街道。 " name="g13" handleChange={this.change} />
                    <Question id="14" question=". 感到自己的精力下降，活动减慢。 " name="g14" handleChange={this.change} />
                    <Question id="15" question=". 想结束自己的生命。 " name="g15" handleChange={this.change} />
                    <Question id="16" question=". 听到旁人听不到的声音。 " name="g16" handleChange={this.change} />
                    <Question id="17" question=". 发抖。 " name="g17" handleChange={this.change} />
                    <Question id="18" question=". 感到大多数人都不可信任。 " name="g18" handleChange={this.change} />
                    <Question id="19" question=". 胃口不好。 " name="g19" handleChange={this.change} />
                    <Question id="20" question=". 容易哭泣。 " name="g20" handleChange={this.change} />
                    <Question id="21" question=". 同异性相处时感到害羞不自在。 " name="g21" handleChange={this.change} />
                    <Question id="22" question=". 感到受骗、中了圈套或有人想抓住您。 " name="g22" handleChange={this.change} />
                    <Question id="23" question=". 无缘无故地突然感到害怕。 " name="g23" handleChange={this.change} />
                    <Question id="24" question=". 自己不能控制地发脾气。 " name="g24" handleChange={this.change} />
                    <Question id="25" question=". 怕单独出门。 " name="g25" handleChange={this.change} />
                    <Question id="26" question=". 经常责怪自己。 " name="g26" handleChange={this.change} />
                    <Question id="27" question=". 腰痛。 " name="g27" handleChange={this.change} />
                    <Question id="28" question=". 感到难以完成任务。 " name="g28" handleChange={this.change} />
                    <Question id="29" question=". 感到孤独。 " name="g29" handleChange={this.change} />
                    <Question id="30" question=". 感到苦闷。 " name="g30" handleChange={this.change} />
                    <Question id="31" question=". 过分担忧。 " name="g31" handleChange={this.change} />
                    <Question id="32" question=". 对事物不感兴趣。 " name="g32" handleChange={this.change} />
                    <Question id="33" question=". 感到害怕。 " name="g33" handleChange={this.change} />
                    <Question id="34" question=". 我的感情容易受到伤害。 " name="g34" handleChange={this.change} />
                    <Question id="35" question=". 旁人能知道您的私下想法。 " name="g35" handleChange={this.change} />
                    <Question id="36" question=". 感到别人不理解您不同情您。 " name="g36" handleChange={this.change} />
                    <Question id="37" question=". 感到人们对您不友好，不喜欢您。 " name="g37" handleChange={this.change} />
                    <Question id="38" question=". 做事必须做得很慢以保证做得正确。 " name="g38" handleChange={this.change} />
                    <Question id="39" question=". 心跳得很厉害。 " name="g39" handleChange={this.change} />
                    <Question id="40" question=". 恶心或胃部不舒服。 " name="g40" handleChange={this.change} />
                    <Question id="41" question=". 感到比不上他人。 " name="g41" handleChange={this.change} />
                    <Question id="42" question=". 肌肉酸痛。 " name="g42" handleChange={this.change} />
                    <Question id="43" question=". 感到有人在监视您谈论您。 " name="g43" handleChange={this.change} />
                    <Question id="44" question=". 难以入睡。 " name="g44" handleChange={this.change} />
                    <Question id="45" question=". 做事必须反复检查。 " name="g45" handleChange={this.change} />
                    <Question id="46" question=". 难以作出决定。 " name="g46" handleChange={this.change} />
                    <Question id="47" question=". 怕乘电车、公共汽车、地铁或火车。 " name="g47" handleChange={this.change} />
                    <Question id="48" question=". 呼吸有困难。 " name="g48" handleChange={this.change} />
                    <Question id="49" question=". 一阵阵发冷或发热。 " name="g49" handleChange={this.change} />
                    <Question id="50" question=". 因为感到害怕而避开某些东西、场合或活动。 " name="g50" handleChange={this.change} />
                    <Question id="51" question=". 脑子变空了。 " name="g51" handleChange={this.change} />
                    <Question id="52" question=". 身体发麻或刺痛。 " name="g52" handleChange={this.change} />
                    <Question id="53" question=". 喉咙有梗塞感。 " name="g53" handleChange={this.change} />
                    <Question id="54" question=". 感到没有前途没有希望。 " name="g54" handleChange={this.change} />
                    <Question id="55" question=". 不能集中注意。 " name="g55" handleChange={this.change} />
                    <Question id="56" question=". 感到身体的某一部分软弱无力。 " name="g56" handleChange={this.change} />
                    <Question id="57" question=". 感到紧张或容易紧张。 " name="g57" handleChange={this.change} />
                    <Question id="58" question=". 感到手或脚发重。 " name="g58" handleChange={this.change} />
                    <Question id="59" question=". 想到死亡的事。 " name="g59" handleChange={this.change} />
                    <Question id="60" question=". 吃得太多。 " name="g60" handleChange={this.change} />
                    <Question id="61" question=". 当别人看着您或谈论您时感到不自在。 " name="g61" handleChange={this.change} />
                    <Question id="62" question=". 有一些不属于您自己的想法。 " name="g62" handleChange={this.change} />
                    <Question id="63" question=". 有想打人或伤害他人的冲动。 " name="g63" handleChange={this.change} />
                    <Question id="64" question=". 醒得太早。 " name="g64" handleChange={this.change} />
                    <Question id="65" question=". 必须反复洗手、点数目或触摸某些东西。 " name="g65" handleChange={this.change} />
                    <Question id="66" question=". 睡得不稳不深。 " name="g66" handleChange={this.change} />
                    <Question id="67" question=". 有想摔坏或破坏东西的冲动。 " name="g67" handleChange={this.change} />
                    <Question id="68" question=". 有一些别人没有的想法或念头。 " name="g68" handleChange={this.change} />
                    <Question id="69" question=". 感到对别人神经过敏。 " name="g69" handleChange={this.change} />
                    <Question id="70" question=". 在商店或电影院等人多的地方感到不自在。 " name="g70" handleChange={this.change} />
                    <Question id="71" question=". 感到任何事情都很困难。 " name="g71" handleChange={this.change} />
                    <Question id="72" question=". 一阵阵恐惧或惊恐。 " name="g72" handleChange={this.change} />
                    <Question id="73" question=". 感到在公共场合吃东西很不舒服。 " name="g73" handleChange={this.change} />
                    <Question id="74" question=". 经常与人争论。 " name="g74" handleChange={this.change} />
                    <Question id="75" question=". 单独一人时神经很紧张。 " name="g75" handleChange={this.change} />
                    <Question id="76" question=". 别人对您的成绩没有作出恰当的评价。 " name="g76" handleChange={this.change} />
                    <Question id="77" question=". 即使和别人在一起也感到孤单。 " name="g77" handleChange={this.change} />
                    <Question id="78" question=". 感到坐立不安心神不定。 " name="g78" handleChange={this.change} />
                    <Question id="79" question=". 感到自己没有什么价值。 " name="g79" handleChange={this.change} />
                    <Question id="80" question=". 感到熟悉的东西变成陌生或不象是真的。 " name="g80" handleChange={this.change} />
                    <Question id="81" question=". 大叫或摔东西。 " name="g81" handleChange={this.change} />
                    <Question id="82" question=". 害怕会在公共场合昏倒。 " name="g82" handleChange={this.change} />
                    <Question id="83" question=". 感到别人想占您的便宜。 " name="g83" handleChange={this.change} />
                    <Question id="84" question=". 为一些有关“性”的想法而很苦恼。 " name="g84" handleChange={this.change} />
                    <Question id="85" question=". 您认为应该因为自己的过错而受到惩罚。 " name="g85" handleChange={this.change} />
                    <Question id="86" question=". 感到要赶快把事情做完。 " name="g86" handleChange={this.change} />
                    <Question id="87" question=". 感到自己的身体有严重问题。 " name="g87" handleChange={this.change} />
                    <Question id="88" question=". 从未感到和其他人很亲近。 " name="g88" handleChange={this.change} />
                    <Question id="89" question=". 感到自己有罪。 " name="g89" handleChange={this.change} />
                    <Question id="90" question=". 感到自己的脑子有毛病。" name="g90" handleChange={this.change} />

                    <br /><br />
                </div>
                {/* <div class="submit">
                    <button type="submit" onClick={this.handleClickbtn}>下一步：问 答 测 试</button>
                </div> */}
                <div class="submit">
                    <input type="submit" name="submit" value="下一步：问 答 测 试" />
                </div>
            </form>
        );
    }
}

export default Survey;
