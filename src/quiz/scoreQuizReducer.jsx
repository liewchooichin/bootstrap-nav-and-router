

export function scoreQuizReducer(score, action){
  switch(action.type){
    case "score_quiz": {
      const newScore = !score;
      return newScore;
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}