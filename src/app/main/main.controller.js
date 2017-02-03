(function () {
  'use strict';

  angular
    .module('skarpline')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(toastr, $scope, $uibModal) {
    $scope.activeBoxId = 0;
     $scope.htmlcontent = {"id" :1, "text":""};
    $scope.boxes = [
      {
        "boxId": "1",
        "header": "SHOP LIST",
        "boxContent": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id mattis felis. Nam malesuada nulla vitae metus volutpat, non vestibulum ante condimentum. Integer in iaculis risus. Proin vulputate ante a nunc fringilla, vel rhoncus metus porttitor. Nullam interdum dolor sit amet diam volutpat suscipit.',
        "updatedOn": "a few seconds ago",
        "boxClass": "bg-1"
      },
      {
        "boxId": "2",
        "header": "SHOP LIST",
        "boxContent": 'Vestibulum quis blandit mauris. Nam imperdiet dolor quis velit sagittis lacinia. Vestibulum lorem velit, eleifend dapibus condimentum sed, dapibus vitae ipsum. Morbi at neque a enim laoreet gravida ut placerat velit. In hac habitasse platea dictumst. Curabitur non nulla ac orci tempus rhoncus id eget sapien.',
        "updatedOn": "a few seconds ago",
        "boxClass": "bg-2"
      },
      {
        "boxId": "3",
        "header": "SHOP LIST",
        "boxContent": 'ed in diam sit amet elit auctor luctus. Aenean est arcu, aliquam a leo condimentum, condimentum commodo justo. Integer scelerisque tempor ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In molestie magna dolor, id vestibulum magna placerat non.',
        "boxClass": "bg-1"
      }
    ];

    var modalPopup = function () {
      return $scope.modalInstance = $uibModal.open({
        templateUrl: '/app/main/editor.html',
        windowClass: 'app-modal-window',
        scope: $scope
      });
    };
    $scope.open = function (_box) {
      
      $scope.boxes.forEach(function(element) {
        if (element.boxId == _box.boxId) { 
          $scope.htmlcontent.text = element.boxContent;
          $scope.activeBoxId = _box.boxId;
        }
      }, this);
         

      modalPopup().result
        .then(function (data) {
          
          console.log('Success');
        })
        .then(null, function (reason) {
          console.log('Fail');
        });

    };

    $scope.cancel = function (_id) {
      $scope.boxes.forEach(function(element,index) {
        if (element.boxId == _id) { 
          $scope.boxes[index].boxContent = $scope.htmlcontent.text;
        }
      }, this);
      $scope.modalInstance.dismiss('No Button Clicked')
    };

  }
})();
