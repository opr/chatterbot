import {isImmutable, List, fromJS} from 'immutable';

export function setState(state, newState) {
  return state.merge(newState);
}

export function setupInitialState(state) {
  if(!isImmutable(state)) {
    state = fromJS(state);
  }

  if(!state.getIn(['entryPoint'])) {
    //get first message in list and set it as the entry point
    state = state.setIn(['currentMessage'], state.getIn(['messages']).keys().next().value);
  }

  if(!state.getIn(['history'])) {
    state = state.setIn(['history'], List());
  }

  return state;
}

export function chooseAnswer(state, chosenAnswer) {
  const nextMessage = state.getIn(['messages', state.getIn(['currentMessage']), 'options', chosenAnswer, 'step']);
  return state.setIn(['messages', state.getIn(['currentMessage']), 'chosenAnswer'], chosenAnswer).setIn(['currentMessage'], nextMessage );
}
