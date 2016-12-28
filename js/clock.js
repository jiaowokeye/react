/**
 * Created by Administrator on 2016/12/27.
 */
class Clock extends React.Component{
    constructor(...args){
        super(...args);
        this.state={h:0,m:0,s:0};
        var _this=this;
        setInterval(function(){
            _this.tick();
        },1000)
    }
    componentDidMount(){
        this.tick();
    }
    getTwo(val){
        if(val<10){
            return "0"+val;
        }else{
            return val;
        }
    }
    tick(){
        var data=new Date();
        var _this=this
        this.setState({
            h:_this.getTwo(data.getHours()),
            m:_this.getTwo(data.getMinutes()),
            s:_this.getTwo(data.getSeconds())
        })
    }
    render(){
        return (<div>
            <span>{this.state.h}</span>:
            <span>{this.state.m}</span>:
            <span>{this.state.s}</span>
        </div>)
    }
}
var oDiv=document.getElementById("wrap");
ReactDOM.render(
    <Clock/>, oDiv
);