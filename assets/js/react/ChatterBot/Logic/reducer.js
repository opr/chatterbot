import {chooseAnswer, simulateTyping} from "./core";

export function reducer(state, action) {

  switch(action.type) {

    case 'CHOOSE_ANSWER':
      return chooseAnswer(state, action.payload);

    case 'SIMULATE_TYPING':
      return simulateTyping(state);

    default:
      return state;
  }
}
