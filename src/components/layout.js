import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'gatsby-plugin-intl'

import Header from './header'

const Layout = ({ children, intl }) => {
  return (
    <div>
      <Header siteTitle={intl.formatMessage({ id: 'title' })} />
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

export default injectIntl(Layout)
