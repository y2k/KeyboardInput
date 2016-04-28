(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    main_kand9s$f: function (it) {
      window.alert('KEYBOARD = ' + it);
    },
    main_kand9s$: function (args) {
      var canvas = document.getElementsByTagName('CANVAS')[0];
      window.alert('ELEMENT = ' + canvas);
      window.onkeydown = _.main_kand9s$f;
    }
  });
  Kotlin.defineModule('KeyboardInput', _);
  _.main_kand9s$([]);
}(Kotlin));
