import { connect } from 'react-redux'
import { answerQuestion } from "../actions/action";
import LogicalNode from '../Form/LogicalNode'
import tree from '../Data/logic.json'
import QuestionList from "../Form/QuestionList";


const getCurrentQuestions = (state) => {
    //var tree = JSON.parse(treeData)
    var result = []
    
    let walkTree = tree

    result.push(walkTree.question)
    for (let i = 0; i < state.length; i++) {
        walkTree = walkTree.choice[state[i].choice]
        result.push(walkTree.question)
    }
    // console.log("state: ", result, state)
    return result
}

const mapStateToProps = state => ({
    questions: getCurrentQuestions(state),
    current: state
})

const mapDispatchToProps = dispatch => ({
    makeChoice: QuestionAndChoice => dispatch(answerQuestion(QuestionAndChoice))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionList)