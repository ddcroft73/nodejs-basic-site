
const sideNav = document.querySelector('.sidenav');

const openNav = () => {
    document.getElementById("Sidenav").style.width = "180px";
    sideNav.style.boxShadow = '0px 0px 5px 5px rgba(0, 0, 0, 0.4), 0 0px 0px 0 rgba(27, 28, 27, 0.19)';
  }    
const closeNav = () => {
   document.getElementById("Sidenav").style.width = "0";
  sideNav.style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 0.4), 0 0px 0px 0 rgba(27, 28, 27, 0.19)';
  } 