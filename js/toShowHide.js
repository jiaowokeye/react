/**
 * Created by zk on 2016/12/27.
 */
class Comp extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {display:"block"};
    }
    fn(){
        console.log(this.state.display);
        this.setState({display:this.state.display=this.state.display=="block"?"none":"block"})
    }
    render() {
        return <div>
            <div id="div1" style={{display:this.state.display}}></div>
            <button onClick={this.fn.bind(this)}>点击</button>
        </div>
    }
}
var oDiv = document.getElementById("wrap");
ReactDOM.render(
    <Comp/>, oDiv
);