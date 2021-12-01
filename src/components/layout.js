import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header siteTitle='Machol & Johannes, LLC' />
      <main>{children}</main>
      <footer className='px-12 py-2 my-2 text-center text-sm text-gray-600 leading-6'>
        © 2011 - {new Date().getFullYear()} Machol & Johannes, LLC All rights
        reserved
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
