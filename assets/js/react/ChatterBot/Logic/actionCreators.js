export function chooseAnswer(input) {
  return {type: 'CHOOSE_ANSWER', payload: input};
}

export function simulateTyping() {
  return {type: 'SIMULATE_TYPING'};
}
