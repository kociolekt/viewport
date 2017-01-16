'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = viewport;
function viewport() {
  var e = window,
      a = 'inner';

  if (!('innerWidth' in window)) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return { width: e[a + 'Width'], height: e[a + 'Height'] };
}