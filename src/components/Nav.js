import { Link } from 'react-router-dom'
import React from 'react'

function Nav() {
  return (
    <>
      <nav>
        <div class="list-wrap">
          <Link to="/">
            <div class="list-items">About</div>
          </Link>
          <Link to="/portfolio">
            <div class="list-items">Portfolio</div>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Nav
