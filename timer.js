var defaults = {}
  , one_second = 1000 // in ms
  , one_minute = one_second * 60 // in ms
  , one_hour = one_minute * 60 // in ms
  , one_day = one_hour * 24 // in ms
  , startDate = new Date()
  , endDate =  new Date()
  , face = document.getElementById('timer_face')
  , hrCountDown1 = document.getElementById('HrCountDown1')
  , hrCountDown2 = document.getElementById('HrCountDown2')
  , studyHours = 2
  , studyMins = 45;

endDate.setHours(startDate.getHours() + studyHours);
endDate.setMinutes(startDate.getMinutes() + studyMins);
var hrCountdownAnimationDuration = "" + (studyHours * one_hour)  + "ms"

console.log(hrCountdownAnimationDuration)
hrCountDown1.style.animationDuration = hrCountdownAnimationDuration
hrCountDown2.style.animationDuration = hrCountdownAnimationDuration
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
var requestAnimationFrame = (function() {
  return window.requestAnimationFrame       || 
         window.webkitRequestAnimationFrame || 
         window.mozRequestAnimationFrame    || 
         window.oRequestAnimationFrame      || 
         window.msRequestAnimationFrame     || 
         function( callback ){
           window.setTimeout(callback, 1000 / 60);
         };
}());

tick();

function tick() {

  var now = new Date()
    , elapsed = endDate - now
    , parts = [];

  parts[0] = '' + Math.floor( elapsed / one_hour );
  parts[1] = '' + Math.floor( (elapsed % one_hour) / one_minute );
  parts[2] = '' + Math.floor( ( (elapsed % one_hour) % one_minute ) / one_second );

  parts[0] = (parts[0].length == 1) ? '0' + parts[0] : parts[0];
  parts[1] = (parts[1].length == 1) ? '0' + parts[1] : parts[1];
  parts[2] = (parts[2].length == 1) ? '0' + parts[2] : parts[2];

  face.innerText = parts.join(':');
  
  requestAnimationFrame(tick);
  
}