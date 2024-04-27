let index = 0;

function changeColors() {
  const colors = [
    `red`,
    `yellow`,
    `green`,
    `blue`,
    `purple`,
    `orange`,
    `indigo`,
    `violet`,
    `tomato`,
  ];
  document.getElementsByTagName(`body`)[0].style.background = colors[index++]
  if (index > colors.length - 1)
    index = 0
}
function white() {
    document.body.style.background =`white`
 }