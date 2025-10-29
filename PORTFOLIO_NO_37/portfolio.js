// const proitems = document.getElementByclass('proitems');
// const align = document.getElementByclass('align');

// proitems.addEventListener('mouseenter', () => {
//   align.style.backgroundColor = 'skyblue';
// });

// hoverMe.addEventListener('mouseleave', () => {
//   changeMe.style.backgroundColor = '';
// });

const roles = ["Frontend Developer" , "Web developer" ," Web Designer"]
let index = 0;
const textElement = document.getElementById("blue");
setInterval(() => {
  textElement.textContent = roles[index];
  index = (index + 1) % roles.length;
}, 2000);