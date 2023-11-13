import React from 'react'
import Navstyle from './Nav.module.css'

const Nav: React.FC = () => {
  return (
    <div className={Navstyle.container}>
      <span className={Navstyle.text}>Quicks</span>
      <span className={Navstyle.logo_text}>
        <img className={Navstyle.apple_logo} />
        Apple, Inc
      </span>
      <span className={Navstyle.text}>All my Quicks</span>

    </div>
  )
}

export default Nav;
