import './UserInfo.css';
import { useNavigate } from 'react-router-dom'

export default function UserInfo() {
  const navigate = useNavigate();

  function redirectPosts() {
    navigate('/posts'); 
  }
  function redirectPostCreate() {
    navigate('/posts/create');
  }

  return (
    <>
      <div className="user-info-container bottom-line">
        <div className="profile profile-medium" style={{backgroundImage: `url("/dev/hui.jpg")`}}></div>
        <div className="user-info-controll-box">
          <div className="user-info-stat-items">
            <p className='user-info-stat-name'>hui_bao</p>
            <p className='user-info-stat-etc'>posts 1911</p>
          </div>
          <div className="user-info-btn-items">
            <div className="user-info-btn" onClick={redirectPosts} style={{backgroundImage: `url("/icons/btn-post-index.png")`}}></div>
            <div className="user-info-btn" onClick={redirectPostCreate} style={{backgroundImage: `url("/icons/btn-add.png")`}}></div>
            <div className="user-info-btn" style={{backgroundImage: `url("/icons/btn-user-index.png")`}}></div>
          </div>
        </div>
      </div>
    </>
  )
}
