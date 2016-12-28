/**
 * Created by Administrator on 2016/12/28.
 */
//class List extends React.Component{
//    constructor(...args){
//        super(...args)
//    }
//    render(){
//        return <ul>1</ul>
//    }
//}
//ReactDOM.render(
//    <List title={[0,1,2]}/>,
//    document.getElementById("wrap")
//)
var Loginlist = React.createClass({
    propTypes:{
        listData:React.PropTypes.array.isRequired
    },
    render:function(){
        return (

            <ul>
                {
                    this.props.listData.map(function(ele,index){
                        return <li key={index}>{ele}</li>
                    })
                }
            </ul>

        )
    }
})
ReactDOM.render(<Loginlist listData={[1,2,3,4]}/>,document.getElementById("div1"))
