(function() {
  'use strict';

  angular
    .module('skarpline')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(toastr) {
    var vm = this;
    vm.showToastr = showToastr;
    vm.hello = "Hello World" ;

    function showToastr() {
      toastr.info('Hello Toaster');
      vm.classAnimation = '';
    }
  }
})();
