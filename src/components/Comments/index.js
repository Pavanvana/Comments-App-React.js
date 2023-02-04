import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    personName: '',
    comment: '',
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(eachComment => eachComment.id !== id),
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {personName, comment} = this.state
    const initialBackgroundColor =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newComment = {
      id: uuidv4(),
      personName,
      comment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColor,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      personName: '',
      comment: '',
    }))
  }

  onChangePersonName = event => {
    this.setState({personName: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, personName, comment} = this.state

    return (
      <div className="app-container">
        <div className="comments-inputs ">
          <h1 className="app-heading">Comments</h1>
          <div className="comments-container">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
            <form className="form" onSubmit={this.onAddComment}>
              <p className="form-description">
                Say something about 4.0 Technologies
              </p>
              <input
                placeholder="Your Name"
                className="name-input"
                type="text"
                onChange={this.onChangePersonName}
                value={personName}
              />
              <textarea
                placeholder="Your Comment"
                className="comment-input"
                rows="6"
                type="text"
                onChange={this.onChangeComment}
                value={comment}
              />
              <button className="add-button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
        </div>
        <hr className="line" />
        <p className="heading">
          <span className="comments-count">{commentsList.length}</span>
          Comments
        </p>
        <ul className="comments-list">
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              toggleIsLiked={this.toggleIsLiked}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
