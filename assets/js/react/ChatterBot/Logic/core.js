import {isImmutable, fromJS} from 'immutable';

export function setState(state, newState) {
  return state.merge(newState);
}

export function setupInitialState(state) {
  if(!isImmutable(state)) {
    state = fromJS(state);
  }

  return state;
}
