// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var output = '';
  // your code goes here

  if (obj === null) {
    return 'null'
  }

  if (Array.isArray(obj)) {
    // start work for array
    var isArr = true;
  } else if (!Array.isArray(obj) && typeof obj === 'object') {
    // do work for obj
    var isObj = true;
  } else {
    // base cases (str, number, boolean, null)
    if (typeof obj === 'string') {
      return '\"' + obj + '\"';
    } else if (obj === null) {
      return undefined;
    } else { //num, bool, null
      return '' + obj;
    }
  }

  if (isObj) {
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    _.each(obj, function(value, key, obj) {
      //if value is undefined or func
      if (typeof value === 'function' || value === undefined) {
        output += '';
      } else {
        output += stringifyJSON(key) + ':' + stringifyJSON(value) + ',';
      }
    });

    //delete last comma
    output = output.slice(0, -1);
    output = '{' + output + '}';
    return output;
  }

  if (isArr) {
    if (obj.length === 0) {
      return '[]';
    }
    output += '[';
    _.each(obj, function(ele, index, obj){
      output += stringifyJSON(ele) + ','
    });
    output = output.slice(0,-1);
    output += ']';
    return output;
  }
};