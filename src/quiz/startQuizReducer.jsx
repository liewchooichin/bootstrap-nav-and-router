
/**Whether to start the quiz */
export function startQuizReducer(isStartQuiz, action){
  switch(action.type){
    case "quiz_start": {
      /**A user clicks the start button to start the
       * quiz.
       */
      const newStart = true;
      return newStart;
    }
    case "quiz_quit": {
      const newStart = false;
      return newStart;
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}