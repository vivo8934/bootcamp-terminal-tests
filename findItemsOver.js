
module.exports = function findItemsOver (aList, threshold)
{
  var eResults = [];

  for (var eList in aList)
  {
    if(aList[eList].qty > threshold)
    {
      eResults.push(aList[eList]);
    }
  }
  console.log(eResults);
    return eResults;
  }
