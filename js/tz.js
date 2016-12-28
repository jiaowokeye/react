/**
 * Created by zk on 2016/12/27.
 */
class Comp extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {x:0,y:0};
    }
    fn(ev){
        var disX=ev.pageX-this.state.x;
        var disY=ev.pageY-this.state.y;
        var _this=this;

        document.onmousemove=function(ev){
            _this.setState({
                x:ev.pageX-disX,
                y:ev.pageY-disY
            })
        }
        document.onmouseup=function(){
            document.onmousemove=null;
            document.onmouseup=null;
        }
    }
    render() {
        return <div className="box" style={{left:this.state.x+"px",top:this.state.y+"px"}} onMouseDown={this.fn.bind(this)}>111</div>
    }
}
var oDiv = document.getElementById("wrap");
ReactDOM.render(
    <Comp/>,
    oDiv
);