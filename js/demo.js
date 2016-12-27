/**
 * Created by Administrator on 2016/12/26.
 */
//header
var Header = React.createClass({
        render: function() {
            return <div className="header">{this.props.title} </div>
        }
    })
    //fooer
var Footer = React.createClass({
        render: function() {
            return <div className="footer">footer</div>
        }
    })
    //content
var Content = React.createClass({
    render: function() {
        return (
            <div className="content">
            <ContentLeft/>
            <ContentMiddle/>
            <ContentRight/>
        </div>
        )
    }
})
var ContentLeft = React.createClass({
    render: function() {
        return <div className="content_left">content_left</div>
    }
})
var ContentRight = React.createClass({
    render: function() {
        return <div className="content_right">content_right</div>
    }
})
var listData = ["商品1", "商品2", "商品3"];
var ContentMiddle = React.createClass({
    render: function() {

        return (
            <div className="content_middle">
                <ul>
                {
                    listData.map(function(ele,index){
                        return <li key={index} >{ele}</li>
                    })
                }
                </ul>
            </div>
        )
    }
})

var IndexPage = React.createClass({
    render: function() {
        return <div className="page" id="index-page">
            <Header title="首页"/>
            <Content />
            <Footer />
        </div>
    }
})

ReactDOM.render(<IndexPage />, document.getElementById("wrap"))