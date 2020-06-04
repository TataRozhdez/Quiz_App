import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-tata.firebaseio.com'
})