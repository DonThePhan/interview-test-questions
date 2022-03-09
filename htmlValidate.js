const str = `<div><p><i><b>hastsdat asdtasd</b></i></p></div>
<div><p>dshdfhfg dfdgh</p></div>`;
// const str = `<div><p><i><b>hastsdat asdtasd</b></i></p></div>`;

// returns true if html string is valid, or returns the element that needs to change to make it valid
function htmlValidate(str) {
  let curStr = str;
  // const elementChars = ['div', 'p', 'i','b']
  // const elements = elementChars.map(element => [`<${element}>`, `<${element}/>`]).flat()
  const elementArr = curStr
    .split(/(?=[<])|(?<=[>])/g)
    .filter((element) => element.includes("<"));

  const iterations = elementArr.length;

  let opEleIndex = 0;
  while (opEleIndex < elementArr.length) {
    if (!elementArr[opEleIndex].includes("/")) {
      const openingElement = elementArr[opEleIndex];

      let closingElementArr = [...openingElement];
      closingElementArr.splice(1, 0, "/");
      const closingElement = closingElementArr.join("");

      const closingElementIndex = elementArr.indexOf(closingElement);

      if (closingElementIndex < 0) {
        opEleIndex++;
      } else {
        elementArr.splice(closingElementIndex, 1);
        elementArr.splice(0, 1);
      }
    } else {
      opEleIndex++;
    }
  }
  if (elementArr.length === 0) return true;
  return elementArr[0];
}

console.log(htmlValidate(str));
