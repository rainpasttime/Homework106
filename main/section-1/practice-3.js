'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var i = [];
  for(var t =0;t<collectionA.length;t++)
  {
    var tem = objectB.value;
    for(var j =0;j<tem.length;j++)
    {
      if(collectionA[t]==tem[j])
      {
        i.push(collectionA[t]);
        break;
      }
    }
  }
  return i;
}
