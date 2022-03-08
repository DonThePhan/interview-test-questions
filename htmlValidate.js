// const str = "1,2,3";
const str = "<div><p><i><b>hastsdat asdtasd</b></i></p></div>";

function htmlValidate(str) {
  let curStr = str
  const elementChars = ['div', 'p', 'i','b']
  const elements = elementChars.map(element => [`<${element}>`, `<${element}/>`]).flat()
  curStr = curStr.split(/(?=[<])|(?<=[>])/g).filter(element => element.includes('<'))
  console.log(curStr)

}

htmlValidate(str)
