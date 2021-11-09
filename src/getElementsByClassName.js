// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:



// var getElementsByClassName = function(className) {
//   // your code here
//   var result = [];

//   var innerIteration = function(elements) {

//     if (_.contains(elements.classList, className)) {
//       result.push(elements);
//     }

//     _.each(elements.childNodes, function(child) {
//       innerIteration(child);
//     });
//   };

//   innerIteration(document.body);
//   return result;
// };



var getElementsByClassName = function(className, currentElement) {
  var result = [];
  if (currentElement === undefined) {
    currentElement = document.body;
  }
  if (currentElement.nodeType === 1) {
    if (currentElement.classList.contains(className)) {
      console.log(currentElement);
      result = result.concat(currentElement);
    }
  }
  if (currentElement.hasChildNodes()) {
    currentElement.childNodes.forEach(function (child) {
      result = result.concat(getElementsByClassName(className, child));
    });
  }
  return result;
};