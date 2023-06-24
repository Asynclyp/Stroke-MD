import decisionTree from "../Data/logic.json";
import tree from "../Data/logic";

const questions = (state = [], choice) => {

  switch (choice.type) {
    case "ANSWER_QUESTION":
      let result = [];
      let walkTree = tree;
      for (let i = 0; i < state.length; i++) {
        let prevChoice = state[i];

        if (walkTree.question == choice.question) {
          break;
        } else {
          result = [...result, { choice: prevChoice.choice }];
        }
        walkTree = walkTree.choice[prevChoice.choice];
      }
      result = [...result, { choice: choice.choice }];
      return result;
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

export default questions;
