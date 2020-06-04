import React from 'react'
import {Link} from 'react-router-dom'
import './FinishedQuiz.css'
import Button from '../UI/Button/Button'

const FinishedQuiz = props => {

  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }

    return total
  }, 0)

  return (
    <div className='FinishedQuiz'>
      <ul>
        { props.quiz.map((quizItem, index) => {
          const cls = [
            'fa',
            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',

          ]
          return (
            <li
              key={index}
            >
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(' ')}></i>
            </li>
          )
        }) }
      </ul>
      <p>Right {successCount} from 10</p>
      <div>
        <Button onClick={props.onRetry} type='primary'>Return</Button>
        <Link to='/'>
          <Button type='success'>Back to the test-list</Button>
        </Link>
      </div>
    </div>
  )
}

export default FinishedQuiz