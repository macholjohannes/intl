import PropTypes from 'prop-types'
import React from 'react'
import MjlogoLg from './mjlogo-lg'

function Header() {
  return (
    <nav className=''>
      <div className='w-auto text-center mt-6'>
        <div className=' md:block'>
          <MjlogoLg />
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
