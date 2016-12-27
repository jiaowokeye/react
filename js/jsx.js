/**
 * Created by Administrator on 2016/12/26.
 */
var names = ["sss", "ddd", "dda", "dada"];
for (let i = 0; i < 4; i++) {
    console.log(i);
}
ReactDOM.render(

    <div className="name_box">
        {
            names.map(function(ele,index){
                return <p key={index}>{ele}</p>
            })
        }
    </div>,
    document.getElementById("div1"))