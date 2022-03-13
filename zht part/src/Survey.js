import React from 'react';
import Question from './Question';
import './Survey.css'
import $ from 'jquery';

class Survey extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { q1: 0, q2: 0, q3: 0, q4: 0, q5: 0 };

    //     this.change = this.change.bind(this);

    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleSubmit(event) {


    //     const url = 'https://arctic-backend-silly-cassowary.cfapps.eu10.hana.ondemand.com/api/v1/feedback/create';

    //     let result = { id: 1 };

    //     const q1 = { question: 1, answer: this.state.q1 };
    //     const q2 = { question: 2, answer: this.state.q1 };
    //     const q3 = { question: 3, answer: this.state.q1 };
    //     const q4 = { question: 4, answer: this.state.q1 };
    //     const q5 = { question: 5, answer: this.state.q1 };

    //     result.answers = [q1, q2, q3, q4, q5];

    //     var jsonData = JSON.stringify(result);

    //     console.log(jsonData);

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
    // }

    // change(event) {

    //     console.log(event.target.name); //g1
    //     console.log(event.target.value); //0

    //     switch (event.target.name) {
    //         case 'g1':
    //             this.setState({ q1: event.target.value });
    //         case 'g2':
    //             this.setState({ q2: event.target.value });
    //         case 'g3':
    //             this.setState({ q3: event.target.value });
    //         case 'g4':
    //             this.setState({ q4: event.target.value });
    //         case 'g5':
    //             this.setState({ q5: event.target.value });
    //         default:
    //     }
    // }
    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <br />
                <div class="formlate">
                    <br /><br />
                    <Question question="1.  头痛。 " name="g1" handleChange={this.change} />
                    <Question question="2.  神经过敏，心中不踏实。 " name="g2" handleChange={this.change} />
                    <Question question="3.  头脑中有不必要的想法或字句盘旋。 " name="g3" handleChange={this.change} />
                    <Question question="4.  头晕和昏倒。 " name="g4" handleChange={this.change} />
                    <Question question="5.  对异性的兴趣减退。 " name="g5" handleChange={this.change} />
                    <Question question="6.  对旁人责备求全。 " name="g6" handleChange={this.change} />
                    <Question question="7.  感到别人能控制您的思想。 " name="g7" handleChange={this.change} />
                    <Question question="8.  责怪别人制造麻烦。 " name="g8" handleChange={this.change} />
                    <Question question="9.  忘记性大。 " name="g9" handleChange={this.change} />
                    <Question question="10.  担心自己的衣饰整齐及仪态的端正。 " name="g10" handleChange={this.change} />
                    <Question question="11.  容易烦恼和激动。 " name="g11" handleChange={this.change} />
                    <Question question="12.  胸痛。 " name="g12" handleChange={this.change} />
                    <Question question="13.  害怕空旷的场所或街道。 " name="g13" handleChange={this.change} />
                    <Question question="14.  感到自己的精力下降，活动减慢。 " name="g14" handleChange={this.change} />
                    <Question question="15.  想结束自己的生命。 " name="g15" handleChange={this.change} />
                    <Question question="16.  听到旁人听不到的声音。 " name="g16" handleChange={this.change} />
                    <Question question="17.  发抖。 " name="g17" handleChange={this.change} />
                    <Question question="18.  感到大多数人都不可信任。 " name="g18" handleChange={this.change} />
                    <Question question="19.  胃口不好。 " name="g19" handleChange={this.change} />
                    <Question question="20.  容易哭泣。 " name="g20" handleChange={this.change} />
                    <Question question="21.  同异性相处时感到害羞不自在。 " name="g21" handleChange={this.change} />
                    <Question question="22.  感到受骗. 中了圈套或有人想抓住您。 " name="g22" handleChange={this.change} />
                    <Question question="23.  无缘无故地突然感到害怕。 " name="g23" handleChange={this.change} />
                    <Question question="24.  自己不能控制地发脾气。 " name="g24" handleChange={this.change} />
                    <Question question="25.  怕单独出门。 " name="g25" handleChange={this.change} />
                    <Question question="26.  经常责怪自己。 " name="g26" handleChange={this.change} />
                    <Question question="27.  腰痛。 " name="g27" handleChange={this.change} />
                    <Question question="28.  感到难以完成任务。 " name="g28" handleChange={this.change} />
                    <Question question="29.  感到孤独。 " name="g29" handleChange={this.change} />
                    <Question question="30.  感到苦闷。 " name="g30" handleChange={this.change} />
                    <Question question="31.  过分担忧。 " name="g31" handleChange={this.change} />
                    <Question question="32.  对事物不感兴趣。 " name="g32" handleChange={this.change} />
                    <Question question="33.  感到害怕。 " name="g33" handleChange={this.change} />
                    <Question question="34.  我的感情容易受到伤害。 " name="g34" handleChange={this.change} />
                    <Question question="35.  旁人能知道您的私下想法。 " name="g35" handleChange={this.change} />
                    <Question question="36.  感到别人不理解您不同情您。 " name="g36" handleChange={this.change} />
                    <Question question="37.  感到人们对您不友好，不喜欢您。 " name="g37" handleChange={this.change} />
                    <Question question="38.  做事必须做得很慢以保证做得正确。 " name="g38" handleChange={this.change} />
                    <Question question="39.  心跳得很厉害。 " name="g39" handleChange={this.change} />
                    <Question question="40.  恶心或胃部不舒服。 " name="g40" handleChange={this.change} />
                    <Question question="41.  感到比不上他人。 " name="g41" handleChange={this.change} />
                    <Question question="42.  肌肉酸痛。 " name="g42" handleChange={this.change} />
                    <Question question="43.  感到有人在监视您谈论您。 " name="g43" handleChange={this.change} />
                    <Question question="44.  难以入睡。 " name="g44" handleChange={this.change} />
                    <Question question="45.  做事必须反复检查。 " name="g45" handleChange={this.change} />
                    <Question question="46.  难以作出决定。 " name="g46" handleChange={this.change} />
                    <Question question="47.  怕乘电车. 公共汽车. 地铁或火车。 " name="g47" handleChange={this.change} />
                    <Question question="48.  呼吸有困难。 " name="g48" handleChange={this.change} />
                    <Question question="49.  一阵阵发冷或发热。 " name="g49" handleChange={this.change} />
                    <Question question="50.  因为感到害怕而避开某些东西. 场合或活动。 " name="g50" handleChange={this.change} />
                    <Question question="51.  脑子变空了。 " name="g51" handleChange={this.change} />
                    <Question question="52.  身体发麻或刺痛。 " name="g52" handleChange={this.change} />
                    <Question question="53.  喉咙有梗塞感。 " name="g53" handleChange={this.change} />
                    <Question question="54.  感到没有前途没有希望。 " name="g54" handleChange={this.change} />
                    <Question question="55.  不能集中注意。 " name="g55" handleChange={this.change} />
                    <Question question="56.  感到身体的某一部分软弱无力。 " name="g56" handleChange={this.change} />
                    <Question question="57.  感到紧张或容易紧张。 " name="g57" handleChange={this.change} />
                    <Question question="58.  感到手或脚发重。 " name="g58" handleChange={this.change} />
                    <Question question="59.  想到死亡的事。 " name="g59" handleChange={this.change} />
                    <Question question="60.  吃得太多。 " name="g60" handleChange={this.change} />
                    <Question question="61.  当别人看着您或谈论您时感到不自在。 " name="g61" handleChange={this.change} />
                    <Question question="62.  有一些不属于您自己的想法。 " name="g62" handleChange={this.change} />
                    <Question question="63.  有想打人或伤害他人的冲动。 " name="g63" handleChange={this.change} />
                    <Question question="64.  醒得太早。 " name="g64" handleChange={this.change} />
                    <Question question="65.  必须反复洗手. 点数目或触摸某些东西。 " name="g65" handleChange={this.change} />
                    <Question question="66.  睡得不稳不深。 " name="g66" handleChange={this.change} />
                    <Question question="67.  有想摔坏或破坏东西的冲动。 " name="g67" handleChange={this.change} />
                    <Question question="68.  有一些别人没有的想法或念头。 " name="g68" handleChange={this.change} />
                    <Question question="69.  感到对别人神经过敏。 " name="g69" handleChange={this.change} />
                    <Question question="70.  在商店或电影院等人多的地方感到不自在。 " name="g70" handleChange={this.change} />
                    <Question question="71.  感到任何事情都很困难。 " name="g71" handleChange={this.change} />
                    <Question question="72.  一阵阵恐惧或惊恐。 " name="g72" handleChange={this.change} />
                    <Question question="73.  感到在公共场合吃东西很不舒服。 " name="g73" handleChange={this.change} />
                    <Question question="74.  经常与人争论。 " name="g74" handleChange={this.change} />
                    <Question question="75.  单独一人时神经很紧张。 " name="g75" handleChange={this.change} />
                    <Question question="76.  别人对您的成绩没有作出恰当的评价。 " name="g76" handleChange={this.change} />
                    <Question question="77.  即使和别人在一起也感到孤单。 " name="g77" handleChange={this.change} />
                    <Question question="78.  感到坐立不安心神不定。 " name="g78" handleChange={this.change} />
                    <Question question="79.  感到自己没有什么价值。 " name="g79" handleChange={this.change} />
                    <Question question="80.  感到熟悉的东西变成陌生或不象是真的。 " name="g80" handleChange={this.change} />
                    <Question question="81.  大叫或摔东西。 " name="g81" handleChange={this.change} />
                    <Question question="82.  害怕会在公共场合昏倒。 " name="g82" handleChange={this.change} />
                    <Question question="83.  感到别人想占您的便宜。 " name="g83" handleChange={this.change} />
                    <Question question="84.  为一些有关“性”的想法而很苦恼。 " name="g84" handleChange={this.change} />
                    <Question question="85.  您认为应该因为自己的过错而受到惩罚。 " name="g85" handleChange={this.change} />
                    <Question question="86.  感到要赶快把事情做完。 " name="g86" handleChange={this.change} />
                    <Question question="87.  感到自己的身体有严重问题。 " name="g87" handleChange={this.change} />
                    <Question question="88.  从未感到和其他人很亲近。 " name="g88" handleChange={this.change} />
                    <Question question="89.  感到自己有罪。 " name="g89" handleChange={this.change} />
                    <Question question="90.  感到自己的脑子有毛病。" name="g90" handleChange={this.change} />
                    <br /><br />
                </div>
                <div class="submit">
                    <button type="submit">下一步：问 答 测 试</button>
                </div>
            </form>
        );
    }
}

export default Survey;
