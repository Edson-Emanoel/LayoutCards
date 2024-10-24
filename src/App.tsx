import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/cardv1">Card 1</Link>
          </li>
          <li>
            <Link to="/cardv2">Card 2</Link>
          </li>
        </ul>
      </header>
      
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
