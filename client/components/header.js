import React from 'react'
import { Image, Icon, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'

const Header = () => {
  return (
    <div className='bottombar'>
      <Image src="./background5.png" className="backgroundpic" />

    </div>
  )
}

export default Header

{/* <div id="homeicon">
        <Link to='/'>
        <Image src="./mystory.png" className="homeicon" />
        </Link>
      </div>
      <div id="projectsicon">
        <Link to='/media'>
        <Image src="./mystory.png" className="projectsicon" />
        </Link>
      </div>
      <div id="writingsicon">
        <Link to='/experience'>
        <Image src="./mystory.png" className="writingsicon" />
        </Link>
      </div>
      <div id="experienceicon">
        <Link to='/contact'>
        <Image src="./mystory.png" className="experienceicon" />
        </Link>
      </div> */}
