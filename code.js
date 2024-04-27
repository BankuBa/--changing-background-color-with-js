let index = 0;

function changeColors() {
  const colors = [
    `red`,
    `linear-gradient(45deg, red, teal)`,
    `yellow`,
    `linear-gradient(45deg, yellow, indigo)`,
    `green`,
    `linear-gradient(55deg, blue, yellow)`,
    `blue`,
    `linear-gradient(45deg, orange,violet )`,
    `purple`,
    `linear-gradient(65deg, green, pink)`,
    `orange`,
    `linear-gradient(45deg, blue, red)`,
    `indigo`,
    `linear-gradient(45deg, blue, tomayp)`,
    `violet`,
    `linear-gradient(45deg, orange, white)`,
    `tomato`,
  ];
  document.getElementsByTagName(`body`)[0].style.background = colors[index++]
  if (index > colors.length - 1)
    index = 0
}
function white() {
    document.body.style.background =`white`
 }