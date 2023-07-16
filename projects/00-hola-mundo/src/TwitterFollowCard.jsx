import './App.css'
import { useState } from 'react' // <-- This is a hook

export function TwitterFollowCard({ children, username = 'unknown', initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
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
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
