export default function countBusinessKeys(data) {
    const result = {};
  
    data.forEach(obj => {
      let business = obj.business;
  
      // Change keys based on specific conditions
      if (business === "sga") {
        business = "SGA";
      } else if (business === "sg") {
        business = "SG";
      }else if (business === "externo") {
        business = "Externo";
      }
  
      if (result.hasOwnProperty(business)) {
        result[business]++;
      } else {
        result[business] = 1;
      }
    });
  
    return result;
  }
  