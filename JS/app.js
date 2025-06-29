// Add the category and emotion boxes to the htmlSections
emotions.forEach(emotionObj => {
  const [categoryBox, emotionBox] = emotionObj.getHtmlContainerString();
  htmlSections[0].innerHTML += categoryBox;
  htmlSections[1].innerHTML += emotionBox;
});

console.log(htmlSections[0].innerHTML)
console.log(htmlSections[1].innerHTML)
