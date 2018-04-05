import {chooseAnswer} from "./core";

export function reducer(state, action) {

  switch(action.type) {

    case 'CHOOSE_ANSWER':
      return chooseAnswer(state, action.payload);

    default:
      return state;
  }
}
