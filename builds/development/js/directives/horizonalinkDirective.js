angular
  .module('myApp')
.directive('horizonalinkDirective',horizonalinkDirective);

function horizonalinkDirective(){
  return{
    restrict:'EA',
    scope:{
      team1:'@',
      team2:'@',
      team3:'@'
    },
    transclude:true,
    template:'<div class="center">\
                <a href="#" class="btn btn-orange">{{team1}}</a>\
                <a href="#" class="btn btn-blue">{{team2}}</a>\
                <a href="#" class="btn btn-orange">{{team3}}</a>\
              </div>'
  };
}
