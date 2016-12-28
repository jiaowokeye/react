/**
 * Created by zk on 2016/12/27.
 */
    //选项卡模块
class Switch extends React.Component {
    constructor(...args) {
        super(...args);
        var arrClass=[];
        for(var attr in this.props.data){
            arrClass.push(attr);
        }
        this.state = {"class":arrClass,"check":arrClass[0]};
    }
    //点击切换选中的状态
    fnClick(index){
        this.setState({"check":this.state.class[index]})
    }
    render() {
        var arr=this.state.class;
        return <div>
            {
                arr.map(function(ele,index){
                    return <button key={index} onClick={this.fnClick.bind(this,index)}>{ele}</button>
                }.bind(this))
            }
            <List data={this.props.data[this.state.check]}/>
        </div>
    }
}
//显示商品模块
class List extends React.Component {
    constructor(...args) {
        super(...args);
    }
    render() {
        var arr=this.props.data;
        console.log(arr);
        return <div>
            {
                arr.map(function(ele,index){
                    return <p key={index}>{ele}</p>
                })
            }
        </div>
    }
}
var oDiv = document.getElementById("wrap");
var listData={
    "newData":["新品1","新品2","新品3"],
    "hotData":["热销1","热销2","热销3"]
}
ReactDOM.render(
    <Switch data={listData}/>, oDiv
);