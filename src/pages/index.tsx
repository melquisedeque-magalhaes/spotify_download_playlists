import { signIn } from "next-auth/react"

export default function Home() {
  return (
    <button onClick={() => signIn('spotify')}>Login com Spotify</button>
  )
}
