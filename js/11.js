/**
 * Created by zk on 2016/12/28.
 */
class Comp extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {};
    }

    render() {
        return <div></div>
    }
}
var oDiv = document.getElementById("wrap");
ReactDOM.render(
    <Comp/>, oDiv
);