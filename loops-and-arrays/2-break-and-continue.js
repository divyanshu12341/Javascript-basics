//Break
//It is used for breaking out of the loop
for (let i = 0; i <= 20; i++) {
  if (i == 15) {
    console.log(`Breaking`);
    break;
  }
}

//Continue
//It is used to skip the current iteration and move to next iteration
for(let i=0;i<=20;i++){
    if(i==13) {
        console.log(`Skipping 13`);
        continue;
    }
    console.log(i);
}