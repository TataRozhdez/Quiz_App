import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {fetchQuizes} from '../../store/actions/quiz'
import {connect} from 'react-redux'
import Loader from '../../components/UI/Loader/Loader'
import './QuizList.css'

class QuizList extends Component {
  
  renderQuizes() {
    return this.props.quizes.map(quiz => {
      return (
        <li 
          key={quiz.id}
        >
          <NavLink to={'/quiz:' + quiz.id}>
            {quiz.name}
          </NavLink>
        </li>
      )
    })
  }

  componentDidMount() {
    this.props.fetchQuizes()


  }

  render() {
    return (
      <div className='QuizList'>
        {
          this.props.loading && this.props.quizes.length !== 0
            ? <Loader />
            : <ul>
                <h1>List of tests</h1>
                {this.renderQuizes()}
              </ul>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizes: () => dispatch(fetchQuizes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList) 
