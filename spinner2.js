const spinner = function(numSpins) {
  for (let i = 1; i <= numSpins; i++) {
  
    setTimeout(() => {
      process.stdout.write('\r|   ');
    }, (i  * 1000) + 100);
    setTimeout(() => {
      process.stdout.write('\r/   ');
    }, (i  * 1000) + 300); 
    setTimeout(() => {
      process.stdout.write('\r-   ');
    }, (i  * 1000) + 500);
    setTimeout(() => {
      process.stdout.write('\r\\   ');
    }, (i  * 1000) + 700);
    setTimeout(() => {
      process.stdout.write('\r|   ');
    }, (i  * 1000) + 900);
  }
  setTimeout(() => {
    process.stdout.write('\n');
  },(numSpins * 1000) + 905);
 
};


spinner(4);

    

    

    
   
