const socials = ["Twitter", "LinkedIn", "Facebook", "Instagram"];
console.log(socials.__proto__);
//!Below function inside for each gonna run for each element in the array
socials.forEach(function (item, index, arr) {
  console.log(item);
  console.log(index);
  console.log(arr);
});

function logSocials(social) {
  console.log(social);
}
socials.forEach(logSocials);

const socialsObj = [
  { name: "Twitter", url: "http://www.twitter.com" },
  { name: "Whatsapp", url: "http://www.whatsapp.com" },
  { name: "LinkedIn", url: "http://www.linkedin.com" },
  { name: "Facebook", url: "http://www.facebook.com" },
  { name: "Instagram", url: "http://www.instagram.com" },
];
socialsObj.forEach((item) => console.log(item["url"]));
