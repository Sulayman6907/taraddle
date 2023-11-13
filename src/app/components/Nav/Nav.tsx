import React from 'react'
import NavStyle from './Nav.module.css'

const Nav: React.FC = () => {
  return (
    <div className={NavStyle.nav_container}>
      <span className={NavStyle.text}>Quicks</span>
      <span className={NavStyle.logo_text}>
        <img className={NavStyle.apple_logo} />
        Apple, Inc
      </span>
      <span className={NavStyle.text}>All my Quicks</span>

    </div>
  )
}

export default Nav;
