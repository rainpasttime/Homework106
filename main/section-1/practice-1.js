'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var i = [];
  for(var t = 0;t<collectionA.length;t++)
  {
      for(var j = 0;j<collectionB.length;j++)
      {
        if(collectionA[t]==collectionB[j])
          i.push(collectionA[t]);
      }
  }
    return i;
}


