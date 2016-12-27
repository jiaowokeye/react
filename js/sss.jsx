/**
 * Created by Administrator on 2016/12/26.
 */
var names=["sss","ddd","dda","dada"];
ReactDOM.render(
    <div class="name_box">
        {
            names.map(function(ele,index){
                return <p key={index}>{ele}</p>
            })
        }
    </div>,
    document.getElementById("div1"))