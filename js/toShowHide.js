/**
 * Created by zk on 2016/12/27.
 */
class Comp extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {display:"block",title:"隐藏"};
    }
    fn(){
        console.log(this.state.display);
        this.setState({display:this.state.display=this.state.display=="block"?"none":"block",
            title:this.state.title=this.state.display=="block"?"隐藏":"显示"
        })
    }
    render() {
        return <div>
            <button onClick={this.fn.bind(this)}>{this.state.title}</button>
            <div id="div1" style={{display:this.state.display}}></div>
        </div>
    }
}
var oDiv = document.getElementById("wrap");
ReactDOM.render(
    <Comp/>, oDiv
);
