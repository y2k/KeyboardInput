(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    main_kand9s$f: function (it) {
      var e = it;
      window.alert('KEYBOARD = ' + JSON.stringify(e.keyCode));
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
