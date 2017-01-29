(function() {
  'use strict';

  angular
    .module('skarpline')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
