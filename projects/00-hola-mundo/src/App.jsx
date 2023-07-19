import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  const users = [
    {
      id: 1,
      username: 'tachi',
      name: 'aide',
      isFollowing: true
    },
    {
      id: 2,
      username: 'jorge',
      name: 'ecko',
      isFollowing: false
    },
    {
      id: 3,
      username: 'something',
      name: 'some name',
      isFollowing: false
    },
    {
      id: 4,
      username: 'justausername',
      name: 'just a name',
      isFollowing: false
    }
  ]
  return (
    <section className='App'>
      {users.map((user) => {
        const { id, username, name, isFollowing } = user
        return (
          <TwitterFollowCard key={id} username={username} isFollowing={isFollowing}>
            {name}
          </TwitterFollowCard>
        )
      })}
    </section>
  )
}
