import Layout from '../Component/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="underline text-blue-800"><Link href="/profile">Ini Home ngelink ke profile</Link></div>
    </Layout>
  )
}
