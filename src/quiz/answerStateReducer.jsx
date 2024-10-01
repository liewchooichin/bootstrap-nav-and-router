export function answerStateReducer(answerStateList, action){
  switch(action.type){
    case "answer_selected": {
      const newState = {
        questionId: action.questionId,
        hasBeenAnswered: action.hasBeenAnswered,
        answerId: action.answerId,
      }
      const newAnswerList = answerStateList.map((a)=>{
        if(a.questionId===action.questionId){
          return newState;
        } else {
          return a;
        }
      });
      return newAnswerList;
    }

    default: {
    throw Error(`Unknown error: ${action.type}`);
  }
}
}