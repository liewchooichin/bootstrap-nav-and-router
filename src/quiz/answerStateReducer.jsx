export function answerStateReducer(answerStateList, action){
  switch(action.type){
    case "answer_selected": {
      console.log("In answer state");
      console.log(action);
      const newState = {
        questionId: action.questionId,
        hasBeenAnswered: action.hasBeenAnswered,
        answerId: action.answerId,
      }
      const newAnswerList = answerStateList.map((a)=>{
        console.log(`In reducer: ans-q ${a.questionId} 
          ques ${action.questionId}`)
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