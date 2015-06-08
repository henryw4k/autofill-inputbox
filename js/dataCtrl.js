
var dataSet = [];
var contacts_onSuccess = function(obj){
  console.log(obj.data);
  obj.data.forEach(function(element, index, array){
    dataSet.push(element.address);
  });
  console.log('dataSet: ', dataSet);
}

$(document).ready(function() {
  $('#inputEmails').autocomplete({ 
    source: dataSet
  });
});