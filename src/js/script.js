var app = angular.module('viaCrucis', []);

app.controller('ctrlMain', function($scope, $http){

  $scope.isClose = false;

  // $http.get('https://raw.githubusercontent.com/interaminense/via-crucis/master/src/js/obj.json').success(function(data, status, headers, config) {
  $http.get('src/js/obj.json').success(function(data, status, headers, config) {
    $scope.data = data;
    console.log(data);
  }).error(function(data, status, headers, config) {

  });

  $scope.close = function() {
    $scope.isClose = true;
    removeClassActive();
  }

  $scope.detail = function(id, elem) {
    $scope.isClose = false;
    $scope.showItem = id;
    removeClassActive();
    elem.currentTarget.classList.add('active');
    console.log("id", id);
  }

  function removeClassActive(){
    for(var i = 0; i < document.querySelectorAll('.picture').length; i++){
      document.getElementsByClassName('picture')[i].classList.remove('active');
    }
  }

});

var currentMousePos = { x: -1, y: -1 }, wHeight= $(window).height(), wWidth= $(window).width();

$(document).mousemove(function(event) {
  currentMousePos.x = event.pageX;
  currentMousePos.y = event.pageY;
  var around1 = (currentMousePos.y * 100 / wHeight * 0.2 - 10) + 'deg',
  around2 = -1 * (currentMousePos.x * 100 / wWidth * 0.2 - 10) + 'deg',
  trans1  = (currentMousePos.x * 5 / wHeight * 0.3 - 15) + 'px',
  trans2  = (currentMousePos.y * 5 / wHeight * 0.3 - 15) + 'px'
  $('.picture').css({
    "-webkit-transform": "translate3d(" + trans1 + ", " + trans2 +", 0) scale(1) rotatex(" + around1 + ") rotatey(" + around2 + ")"
  });
  $('.picture:hover').css({
    "-webkit-transform": "translate3d(" + trans1 + ", " + trans2 +", 0) scale(1.03) rotatex(" + around1 + ") rotatey(" + around2 + ")"
  });
  $('body').mouseleave(function() {
    $(".picture").css({
      "-webkit-transform": "translate3d(0) scale(1) rotate(0deg)"
    });
  });
});
