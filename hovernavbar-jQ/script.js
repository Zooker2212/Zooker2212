const nav = document.querySelector('.vertical-navbar');
const navList = document.querySelector('vertical-navbar ul');

nav.addEventListener('mouseover', function(){
  navList.style.display = 'block'
});

nav.addEventListener('mouseout', function(){
  navList.style.display = 'none'
});