import React, {Component} from 'react'
import './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'


class Quize extends Component {
    state = {
        results: {}, //{[id]: success / error}
        isFinished: false,
        activQuastion: 0,
        answerState: null, //{[id]: success / error}
        quiz: [
            {
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Черное', id: 1},
                    {text: 'Синего', id: 2},
                    {text: 'Красное', id: 3},
                    {text: 'Зеленое', id: 4}
                ]
            },
            {
                question: 'В каком году основали Санки-Петербург?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1705', id: 2},
                    {text: '1703', id: 3},
                    {text: '1803', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }


        const question = this.state.quiz[this.state.activQuastion]
        const results = this.state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activQuastion: this.state.activQuastion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 500)


        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }


    }
    isQuizFinished() {
        return this.state.activQuastion +1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            activQuastion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render () {
        return (
            <div className='Quiz'>
                <div className='QuizWrapper'>
                    <h1>Заполните ответы на все вопросы</h1>

                    {
                        this.state.isFinished
                        ?   <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            />
                        :   <ActiveQuiz
                            answers={this.state.quiz[this.state.activQuastion].answers}
                            question={this.state.quiz[this.state.activQuastion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activQuastion + 1}
                            state={this.state.answerState}
                    />
                    }


                </div>
            </div>
        )
    }
}

export default Quize