define(['app'], function(app) {
   
  var FILTER_NAME = 'myFilter';
  var filter = function() {
    return function(input, option) {
      return input + option;
    }
  };
  
  app.filter(FILTER_NAME, filter);
  return filter;
   
});