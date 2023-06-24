import placeholder from "lodash/fp/placeholder";

export const answerQuestion = result => ({
    type: 'ANSWER_QUESTION',
    question: result.question,
    choice: result.choice
})

export const clear = placeholder => ({
    type:'CLEAR',
    value: placeholder
})