$ =jQuery=require('jquery');
var React= require('react');
var ReactDOM= require('react-dom');
var reactroute=require('react-router');
var Home=require('./js/components/home/HomePage.jsx')
var AboutPage=require('./js/components/home/AboutPage.jsx')
var Horizon=require('./js/components/home/Horizon.jsx')
var reactclass=require('create-react-class')
var students=require('./js/components/home/StudentDetails.jsx')

var App=reactclass({
    render:function(){
        var Child;
        switch(this.props.route){
        case 'about':
            console.log("aboutblock");
            Child=AboutPage;
            break;
        case 'StudentDetails':
            Child=students;
            break;  
        default :
        console.log("default")

            Child=Home;  
            break  ;
        }
        return(
        <div>
        <Horizon />    
        <Child />
        </div> 
        )
    }
}
)

function _routeMe(){
    var route=window.location.hash.substr(1);
    console.log(route)
    ReactDOM.render(<App route={route} />,document.getElementById('app'))
}

window.addEventListener('hashchange',_routeMe)
_routeMe()