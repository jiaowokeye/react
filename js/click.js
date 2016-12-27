/**
 * Created by zk on 2016/12/27.
 */
class Comp extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {arr:["zk","zzk","ck","qx"]};
    }
    fn(index){
        alert(index)
    }
    render() {
        var listData=this.state.arr;
        return (
            <div>
                <ul>
                    {
                        listData.map(function(ele,index){
                             return <li key={index} onClick={this.fn.bind(this,index)}>ele</li>
                        }.bind(this))
                    }
                </ul>
            </div>
            )
    }
}
var oDiv = document.getElementById("wrap");
ReactDOM.render(
    <Comp/>, oDiv
);