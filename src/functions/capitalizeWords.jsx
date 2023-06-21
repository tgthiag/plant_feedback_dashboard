//CAPITALIZE WORDS AND REMOVE ACCENT MARKS
export const capitalizeWords = (str) => {
    var word = "";
    var strAccents = str.split('');
    var strAccentsOut = new Array();
    var strAccentsLen = strAccents.length;
    var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    var accentsOut = ['A','A','A','A','A','A','a','a','a','a','a','a','O','O','O','O','O','O','O','o','o','o','o','o','o','E','E','E','E','e','e','e','e','e','C','c','D','I','I','I','I','i','i','i','i','U','U','U','U','u','u','u','u','N','n','S','s','Y','y','y','Z','z'];
    
    for (var y = 0; y < strAccentsLen; y++) {
      if (accents.indexOf(strAccents[y]) !== -1) {
        strAccentsOut[y] = accentsOut[accents.indexOf(strAccents[y])];
      } else {
        strAccentsOut[y] = strAccents[y];
      }
    }
    
    strAccentsOut = strAccentsOut.join('');
    word = strAccentsOut.replace("!","").replace(".","").replace(",","").replace("?","");
    
    return word?.charAt(0).toUpperCase() + word?.slice(1).toLowerCase();
  };
  