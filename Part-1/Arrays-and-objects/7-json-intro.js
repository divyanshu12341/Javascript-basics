// !JSON stands for Javascript object Notation.
// ! It is a way of storing data in human readable format
//!JSON became a standard for storing and receiving data.Earlier,XML was a standard
// !In JSON,keys gonna have double quotes means keys should be string.

const Post = {
    id:1,
    title:"Post-1",
    body:"This is post body"
}

console.log(Post);

//! Convert to JSON String

const str = JSON.stringify(Post);
console.log(str);

//! Parse JSON string
const parseStr = JSON.parse(str);
console.log(parseStr);

const Posts = [{
    id:1,
    title:"Posts 1",
    body:"This is the Posts body"
},{
    id:2,
    title:"Posts 2",
    body:"This is the Posts 2 body"
}]

const str2 = JSON.stringify(Posts);
console.log(str2);

const parseStr2 = JSON.parse(str2);
console.log(parseStr2);