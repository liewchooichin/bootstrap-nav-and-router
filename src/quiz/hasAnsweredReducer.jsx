
export function hasAnsweredReducer(hasAnswered, action){
  switch(action.type){
    case "answer_selected": {
      const newAnswer = action.answerSelected;
      return newAnswer;
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}