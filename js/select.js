/**
 * Created by zk on 2016/12/27.
 */
class Select extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {check:0};
    }
    fnClick(index){
        this.setState({
            check:index
        })
        $(".optionBox").slideUp();
    }
    componentDidMount(){
        $("li").on("click",function(){
            alert(1)
        })
    }
    fnClick1(){
        $(".optionBox").slideToggle();
    }
    render() {
        var arr=this.props.data.option;
        return (<div>
                    <div className="checkp" onClick={this.fnClick1.bind(this)}>{arr[this.state.check]}</div>
                    <ul className="optionBox">
                        {
                            arr.map(function(ele,index){
                                return <li key={index} onClick={this.fnClick.bind(this,index)} className="item">{ele}</li>
                            }.bind(this))
                        }
                    </ul>
        </div>)
    }
}
var oDiv = document.getElementById("wrap");
var data={
    option:["这一个选项","这二个选项","这三个选项","这四个选项"]
}
ReactDOM.render(
    <Select data={data}/>, oDiv
);