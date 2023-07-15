import './App.css'
import { useState } from 'react' // <-- This is a hook

export function TwitterFollowCard({ children, username = 'unknown' }) {
  const [isFollowing, setIsFollowing] = useState(false)
  // ⬆️ returns an array ⬇️
  // [0] = Value [1] = Function to update state

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const avatarUrl = `https://unavatar.io/${username}`
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassname = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={avatarUrl} alt="avatarAleatorio" />
        <div className="tw-followCard-info">
          <strong> {children} </strong>
          <span className="tw-followCard-infoUserName">@{username}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassname} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}
