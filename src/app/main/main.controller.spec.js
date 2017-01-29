(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    var toastr;

    beforeEach(module('skarpline'));
    beforeEach(inject(function(_$controller_ , _toastr_) {
      spyOn(_toastr_, 'info').and.callThrough();

      vm = _$controller_('MainController');
      toastr = _toastr_;
    }));


    it('should show a Toastr info and stop animation when invoke showToastr()', function() {
      vm.showToastr();
      expect(toastr.info).toHaveBeenCalled();
      expect(vm.classAnimation).toEqual('');
    });

  });
})();
