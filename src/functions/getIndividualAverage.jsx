function calculateAverageValue(data, key) {
    let sum = 0;
    let count = 0;
  
    for (const item of data) {
      if (item.hasOwnProperty(key)) {
        sum += item[key];
        count++;
      }
    }
  
    const average = count > 0 ? sum / count : 0;
    return average;
  }
  export default calculateAverageValue;