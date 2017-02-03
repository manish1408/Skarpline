(function () {
  'use strict';

  angular
    .module('skarpline')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(toastr, $scope, $uibModal) {
    
    $scope.orightml = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><img class="ta-insert-video" ta-insert-video="http://www.youtube.com/embed/2maA1-mvicY" src="" allowfullscreen="true" width="300" frameborder="0" height="250"/></p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li>Super Easy <b>Theming</b> Options</li><li style="color: green;">Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li class="text-danger">Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE9+</li></ol><p><b>Code at GitHub:</b> <a href="https://github.com/fraywing/textAngular">Here</a> </p><h4>Supports non-latin Characters</h4>';
    $scope.htmlcontent = $scope.orightml;
    $scope.disabled = false;
    

    var modalInstance = $uibModal.open({
        templateUrl: '/app/main/editor.html',
        windowClass: 'app-modal-window',
        scope: $scope
      });


    $scope.open = function () {
      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      });
    };

    $scope.cancel = function () {
      modalInstance.dismiss('cancel');
    };
    
  }
})();
