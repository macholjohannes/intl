import { FormattedMessage, Link } from 'gatsby-plugin-intl'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { ExternalLink } from 'react-external-link'
import Language from './language'
import MjlogoSm from './mjlogo-sm'
import MjlogoLg from './mjlogo-lg'

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className=''>
      <div className='w-auto text-center mt-6'>
        <div className=' md:block'>
          <Link to={`/`}>
            <MjlogoLg />
          </Link>
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
