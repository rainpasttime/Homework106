'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  var i = [];
  for(var t =0;t<collectionA.length;t++) {
    for(var j=0;j<collectionB[0].length;j++)
    {
      if(collectionA[t]==collectionB[0][j])
      {
        i.push(collectionA[t]);
        break;
      }
    }
  }
  return i;
}
