import { quizLength } from "./quizData";

export function questionPageReducers(questionNum, action){
  switch(action.type){
    case "prev": {
      let nextQuestion = action.questionNum - 1;
    // check the question number to be less than the max
    // number of questions.
    nextQuestion = (nextQuestion < 0) ? 0 : nextQuestion;
    return nextQuestion;
    }
    case "next": {
      let nextQuestion = action.questionNum + 1;
    // check the question number to be less than the max
    // number of questions.
    nextQuestion = (nextQuestion <= quizLength-1) 
    ? nextQuestion 
    : quizLength-1;
    return nextQuestion;
    } 
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}