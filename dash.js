// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
const sidebarclk = document.getElementById('sidebarclk') 

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

document.addEventListener('DOMContentLoaded', function() {
    sidebarclk.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'index.html';
    });
});

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}