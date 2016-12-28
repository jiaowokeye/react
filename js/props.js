/**
 * Created by zk on 2016/12/28.
 */
var classList=[];
$.getJSON("http://datainfo.duapp.com/shopdata/getclass.php",function(data){
    console.log(typeof data);
    for(var i=0;i<data.length;i++){
        classList.push({"classID":data[i].classID,"className":data[i].className})
    }
    ReactDOM.render(
        <Page data={classList}/>, oDiv
    );
})
class Page extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {value:0,data:[]};
    }
    fnGetData(){
        var _this=this;
        var url="http://datainfo.duapp.com/shopdata/getGoods.php?classID="+_this.state.value+"&callback=?";
        console.log(url)
        $.getJSON(url,function(data){
            _this.setState({
                data:data
            })
        },function(error){})
    }
    componentWillMount(){
        this.fnGetData()
    }

    fnClick(index){
        this.setState({
            value:index
        })
        this.fnGetData()
    }
    render() {
        var arr=this.props.data;
        return <div>
            <ul className="classbox">
                {
                    arr.map(function(ele,index){
                        return <li key={index} onClick={this.fnClick.bind(this,index)}>{ele.className}</li>
                    }.bind(this))
                }
            </ul>
            <List data={this.state.data}/>
        </div>

    }
}
class List extends React.Component {
    constructor(...args) {
        super(...args);
    }
    render() {
        var arr=this.props.data;
        console.log(arr);
        return <ul className="shopbox">
            {
                arr.map(function(ele,index){
                    return <li key={index}><img src={ele.goodsListImg} alt=""/>
                        <p>{ele.goodsName}</p>
                        <p>￥{ele.price}</p></li>
                })
            }
        </ul>
    }
}
var oDiv = document.getElementById("wrap");
