import React from "react"
// eslint-disable-next-line
// import ActiveQuiz from "../../ActiveQuiz"
import './AnswerItem.css'

const AnswerItem = props => {
    // const cls = [classes.AnswerItem]
    // var rez = ''
    // if (props.state !== null) {
    //     rez = 'AnswerItem success'
    // } else {
    //     rez = 'AnswerItem error'
    // }

    return (
        <li
            // className = { rez }
            // className='AnswerItem'
            onClick={() => props.onAnswerClick(props.answer.id)}
            className={props.state !== null ? 'AnswerItem error' : 'AnswerItem'}
        >
            { props.answer.text }
        </li>
    )
}

export default AnswerItem