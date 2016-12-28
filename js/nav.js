/**
 * Created by zk on 2016/12/27.
 */
    //导航栏
class NavSelect extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {navList:this.props.navList};
    }
    fnClick(index){
        $(".subnav").slideUp()
        $(".subnav").eq(index).slideDown()
    }
    render() {
        var arr=this.state.navList;
        return(
           <ul className="nav" >
               {
                   arr.map(function(ele,index){
                       return (<li key={index} className="navli" onClick={this.fnClick.bind(this,index)}>{ele.class}
                           <SubSelect listData={ele.subList}/>
                       </li>)
                   }.bind(this))
               }
           </ul>
        )
    }
}
//二级导航
class SubSelect extends React.Component{
    constructor(...args) {
        super(...args);
        this.state={"subList":this.props.listData}
    }
    render(){
        var arr= this.state.subList;
        return <ul className="subnav">
            {
                arr.map(function(ele,index){
                    return <li className="navli" key={index}>{ele}</li>
                })
            }
        </ul>
    }
}
var arrList=[
    {"class":"电子数码","subList":["手机","电脑","相机"]},
    {"class":"衣服","subList":["男装","女装","童装","冬装"]},
    {"class":"美食","subList":["生鲜","特产","水果"]}
]
var oDiv = document.getElementById("wrap");
ReactDOM.render(
    <NavSelect navList={arrList}/>, oDiv
);