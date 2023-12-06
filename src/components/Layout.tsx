import { Outlet } from 'react-router'
import NavBar from './NavBar'

export default function Layout() {
  return (
    <>
      <header style={{ backgroundColor: 'blue', color: 'white' }}>
        <h1 style={{ margin: '0 10px' }}>React Create App</h1>
        <NavBar />
      </header>
      <main style={{ margin: 'auto', display: 'inline-block' }}>
        <Outlet context={'test'} />
      </main>
      <footer style={{ backgroundColor: 'yellowgreen' }}>&copy; me 2023</footer>
    </>
  )
}
