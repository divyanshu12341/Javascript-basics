//DOM is programming interface of html/web elements.
//Structure that we can interact with via javascript.
//Includes tags,attributes,text nodes etc
//Tree like structure
console.log(window);
console.log(window.document);
//Since windows is a topmost object,then we do not need to prefix it with window
console.log(document);
//Body of document
console.log(document.body);
//We just want html of a body
console.log(document.body.innerHTML);
//We want text of a body
console.log(document.body.innerText);
//We want link of a body
//It gives HTML collection of links
console.log(document.links);
//We use index to access specific links
console.log(document.links[0]);
//We can change body of html document
// document.body.innerHTML = `<h1> Hello whatsupp how is everything going </h1>`;
//document.write write it on end of file
document.write("Hi this is document.write");
//Grabbing id
const main = document.getElementById("main");
main.innerHTML = "<h1> Hello from main </h1>";
