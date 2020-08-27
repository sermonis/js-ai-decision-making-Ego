import { State } from "./State";

var StateMachine = function(knowledge){
  State.call(this, null);

  this._knowledge = knowledge;
  this._statesByID = {};
}
StateMachine.prototype = Object.create(State.prototype);

StateMachine.prototype.addState = function(state){
  if (state.setParent(this)){
    this._statesByID[state.getID()] = state;

    return true;
  }

  return false;
}

Object.defineProperty(StateMachine.prototype, 'constructor', { value: StateMachine,  enumerable: false, writable: true });
export { StateMachine };