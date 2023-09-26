const d = new Date(10, 30, 2022, 14, 0, 0);
const hour = d.getHours();
console.log(hour);
if (hour < 12) {
  console.log(`Good Morning`);
} else if (hour < 18) {
  console.log(`Good Afternoon`);
} else {
  console.log(`Good Night`);
}

//!Nested if
if (hour < 12) {
  console.log(`Good Morning`);
  if (hour === 6) {
    console.log(`Wake Up`);
  }
} else if (hour < 18) {
  console.log(`Good Afternoon`);
} else {
  console.log(`Good Night`);
  if (hour >= 20) {
    console.log(`zzzz`);
  }
}

//!Multiple conditions in single if statement
if(hour>=7 && hour<=15){
    console.log(`It is worktime!`);
}
if(hour ===6 || hour===20){
    console.log(`Brush Your Teeth`);
}