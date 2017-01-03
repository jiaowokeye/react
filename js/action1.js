/**
 * Created by zk on 2016/12/28.
 */
class Comp extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            value: 56
        };
    }
    componentWillMount() {
        Action.on("changeValue", function(value) {
            this.setState({
                value: value
            })
        }.bind(this))

    }
    render() {
        return <div >
            <p>{this.state.value}</p>
            < Child/>
            </div>
    }
}
class Child extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            value: 56
        };
    }
    fnClick() {
        Action.emit("changeValue", "60")
    }
    render() {
        return <div >
            < p onClick = {
                this.fnClick.bind(this)
            } > 点击 < /p> < /div >
    }
}

var oDiv = document.getElementById("wrap");
ReactDOM.render( < Comp / > , oDiv);