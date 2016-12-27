/**
 * Created by Administrator on 2016/12/26.
 */
var HelloMassge=React.createClass({
    render:function(){
        return <h3>HelloMassge</h3>
    }
});
var Learn=React.createClass({
    render:function(){
        return <p>welcome learning</p>
    }
})
var Hello=React.createClass({
    render: function () {
        return <div>
            <HelloMassge/>
            <Learn/>
        </div>
    }
})
ReactDOM.render(<Hello/>,document.getElementById("div1"))