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
        return <div className="content">{this.props.children}</div>
    }
})
var ContentLeft = React.createClass({
    render: function() {
        return <div className="content_left">{this.props.children}</div>
    }
})
var ContentRight = React.createClass({
    render: function() {
        return <div className="content_right">{this.props.children}</div>
    }
})
var ContentMiddle = React.createClass({
    render: function() {
        return  <div className="content_middle">{this.props.children}</div>
    }
})

var IndexPage = React.createClass({
    render: function() {
        return <div className="page" id="index-page">
            <Header title="首页"/>
            <Content>
                <ContentLeft>ContentLeft</ContentLeft>
                <ContentMiddle>
                    <span>1</span>
                </ContentMiddle>
                <ContentRight>ContentRight</ContentRight>
            </Content>
            <Footer />
        </div>
    }
})

ReactDOM.render(<IndexPage />, document.getElementById("wrap"))