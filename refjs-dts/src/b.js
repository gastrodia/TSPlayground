
var Signal = function(actorA) {
  this.defaultTarget = actorA;
  this.eventTarget = new goog.events.EventTarget;
};
