import React from "react"
import './AnswerItem.css'

const AnswerItem = props => {

    var cls = ['AnswerItem']

    if (props.state === 'success') {
        cls.push('success')
    }
    if (props.state === 'error') {
        cls.push('error')
    }
    return (
        <li
            className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            { props.answer.text }
        </li>
    )
}

export default AnswerItem