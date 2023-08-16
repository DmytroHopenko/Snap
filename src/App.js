import Header from "./components/Header";
import Main from "./components/Main";
import $ from "jquery";

function App(){
  $(window).on('resize', function(){
    if($(window).width() >= 950){
      $('.mobile-fill').css('display','flex')
    }
    else{
      $('.mobile-fill').css('display','none')
    }
  })
  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
}

export default App;
