// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteComment} = props
  const {
    personName,
    comment,
    date,
    isLiked,
    initialClassName,
    id,
  } = commentDetails
  const likeTextClassName = isLiked && 'active'
  const likedImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const onClickDeleteButton = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={`initial-container ${initialClassName}`}>
          <p className="initial">{personName[0]}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{personName}</p>
            <p className="time">{postedTime}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img className="like-image" src={likedImgUrl} alt="like" />
          <button
            className={`button ${likeTextClassName}`}
            type="button"
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          className="button"
          type="button"
          onClick={onClickDeleteButton}
          data-testid="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}
export default CommentItem
