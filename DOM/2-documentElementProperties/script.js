//It gives html collection of all the elements
let deprecatedProperty = document.all;
let specificDeprecatedPropery = document.all[1];
console.log(deprecatedProperty);
console.log(specificDeprecatedPropery);

const documentElement = document.documentElement;
console.log(documentElement);

//It gives access to the head tag
const accessingHead = document.head;
console.log(accessingHead);

//It gives html collection of head child elements
const accessingHeadChildren = document.head.children;
console.log(accessingHeadChildren);

//It gives html collection of body child elements
const accessingBodyChildren = document.body.children;
console.log(accessingBodyChildren);

//Getting doctype of element
const doctype = document.doctype;
console.log(doctype);

//Getting content-type
const contentType = document.contentType;
console.log(contentType);

//Forms
const allForms = document.forms;
console.log(allForms);

const specificForm = document.forms[0];
console.log(specificForm);

const specificFormId = document.forms[0].id;
console.log(specificFormId);

//GET METHOD IS BY DEFAULT 
const specificFormMethod = document.forms[0].method;
console.log(specificFormMethod);

//CHANGING ID OF FORM USING JAVASCRIPT
document.forms[0].id = 'new-id';

//CLASSES
document.forms[0].className = 'form-class';
const accessingAllClasses = document.forms[0].classList;
console.log(accessingAllClasses);

//IMAGES
const documentImages = document.images;
const specificDocumentImages = document.images[0];
const linkOfImages = document.images[0].src;
//!Below is invalid, as you cannot loop over html collection
// const loopingOverForm = document.forms.forEach((form)=>console.log(form));
const forms = Array.from(document.forms);
forms.forEach((form)=>console.log(form));