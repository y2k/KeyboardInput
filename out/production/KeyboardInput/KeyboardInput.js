(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    main_kand9s$: function (args) {
      var canvas = document.getElementsByTagName('CANVAS')[0];
      window.alert('ELEMENT = ' + canvas);
    }
  });
  Kotlin.defineModule('KeyboardInput', _);
  _.main_kand9s$([]);
}(Kotlin));
