/**
 * Created by zk on 2016/12/27.
 */
class Comp extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {};
    }
    fn(){
        this.refs["s1"].style.color="red"

    }
    render() {
        return <div>
            <button onClick={this.fn.bind(this)}>点击</button>
            <span ref="s1">1</span>
        </div>
    }
}
var oDiv = document.getElementById("wrap");
ReactDOM.render(
    <Comp/>, oDiv
);