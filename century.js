function centuryFromYear(year) {
    return Math.ceil(year / 100);
  }
  

  const year = 2023;
  const century = centuryFromYear(year);
  
  console.log(`The year ${year} belongs to the ${century} century.`);
  