import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  const bcrra = {
    username: 'bcrro',
    isFollowing: false,
  }
  const jorge = {
    username: 'jorge',
    isFollowing: false,
  }
  const alejandrocapo = {
    username: 'alexelcapo',
    isFollowing: true,
  }
  return (
    <section className="App">
      <TwitterFollowCard username={bcrra.username}>becerraaaa</TwitterFollowCard>
      <TwitterFollowCard username="alexelcapo">alejandrocapo</TwitterFollowCard>
      <TwitterFollowCard username="jorge">jorge</TwitterFollowCard>
    </section>
  )
}
