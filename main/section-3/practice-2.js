'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var sub = objectB.value;
  for(var i =0;i<sub.length;i++)
  {
    var tem = sub[i];
    for(var j =0;j<collectionA.length;j++)
    {
      var key = collectionA[j].key;
        if(key==tem)
        {
          if(collectionA[j].count>=3)
          {
            var t = collectionA[j].count;
            t = Math.floor(t/3);
            collectionA[j].count-=t;
          }
          break;
        }
        else
          continue;
        }
    }
  return collectionA;
}
