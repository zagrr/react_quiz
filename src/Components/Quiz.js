import React, { Component } from "react"
import styled from "styled-components";

import Question from "./Question";

const StyledQuiz = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 100px;
    background: linear-gradient(90deg, #5041b2 0%, #7969e6 100%);
    flex-grow: 1;
`

const StyledH1 = styled.h1`
    color: #fff;
    margin-left: 10px;
`

class Quiz extends Component {

    onQuestionAnswered = () => {
        this.setState({ ActiveQuestionIndex: this.state.ActiveQuestionIndex + 1});
    }

    state = {
        ActiveQuestionIndex: 0,
        quiz: [
            {
                id: 1,
                questionText: "Как тебя зовут?",
                answers: [
                    { text: "Саша", id: 1 },
                    { text: "Миша", id: 2 },
                    { text: "Карл", id: 3 },
                    { text: "Галя", id: 4 }
                ],
                rightAnswerID: 3
            },
            {
                id: 2,
                questionText: "Что сдаем?",
                answers: [
                    { text: "Физика", id: 1 },
                    { text: "Химия", id: 2 },
                ],
                rightAnswerID: 1
            },
            {
                id: 2,
                questionText: "Какого цвета учебник?",
                answers: [
                    { text: "Красный", id: 1 },
                    { text: "Синий", id: 2 },
                ],
                rightAnswerID: 2
            }
        ]

    }



    render() {
        return (
            <StyledQuiz>
                <div>
                    <StyledH1>Анкета</StyledH1>
                    <Question
                        question={this.state.quiz[this.state.ActiveQuestionIndex]}
                        index={this.state.ActiveQuestionIndex + 1}
                        questionsCount={this.state.quiz.length} 
                        onQuestionAnswered = {this.onQuestionAnswered}
                        />
                </div>

            </StyledQuiz>

        );
    }
}

export default Quiz;