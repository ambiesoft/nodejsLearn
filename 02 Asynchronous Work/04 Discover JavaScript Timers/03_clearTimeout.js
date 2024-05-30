const id = setTimeout(() => {
    // should run after 2 seconds
    console.log(2);
  }, 2000);
  
  // I changed my mind
  clearTimeout(id);
  