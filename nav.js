
const sideNav = document.querySelector('.sidenav');

const openNav = () => {
    document.getElementById("Sidenav").style.width = "250px";
    sideNav.style.boxShadow = '0px 0px 5px 3px rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(27, 28, 27, 0.19)';
  }    
const closeNav = () => {
   document.getElementById("Sidenav").style.width = "0";
  sideNav.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 0.4), 0 0px 0px 0 rgba(27, 28, 27, 0.19)';
  } 


let userAgentString = navigator.userAgent;
  // Detect Firefox
let firefoxAgent = userAgentString.indexOf("Firefox") > -1;

if (firefoxAgent) {
    const head = document.querySelector('.content-head');
    head.style.fontSize = '20px';
    const text = document.querySelector('.content-text');
    text.style.fontSize = '18px';
}
