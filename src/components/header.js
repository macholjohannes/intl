import { FormattedMessage, Link } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { ExternalLink } from "react-external-link"
import Language from "./language"
import MjlogoSm from './mjlogo-sm'
import MjlogoLg from './mjlogo-lg'

function Header ({ siteTitle })  {

  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="font-sans flex items-center justify-between flex-wrap bg-mjgray py-2 px-6">
      <div className="w-1/2 md:w-2/6 md:ml-6">
        <div className="md:hidden pt-1">
          <Link to={`/`}>
            <MjlogoSm />
          </Link>
        </div>
        <div className="hidden md:block">
          <Link to={`/`}>
            <MjlogoLg />
          </Link>
        </div>
      </div>

      <div className="lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="absolute right-28 top-4 px-4 py-2 mb-2 border rounded text-black border-grayoutline hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="absolute right-6 top-4">
        <Language />
      </div>
      
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full mb-2 md:flex-grow lg:mb-0 lg:ml-28 text-center lg:flex  text-lg  font-medium lg:w-auto `}
      >
        <div className="">
          <Link
            to={`/`}
            href="#responsive-header"
            className="my-2 block border pb-1 rounded  border-gray300 hover:bg-gray300 lg:hover:bg-transparent lg:border-mjgray lg:rounded-none lg:my-0 lg:pb-0 lg:mx-6 lg:inline-block lg:hover:text-yellowbutton transition duration-300 ease-in-out"
            activeClassName="active-link"
          >
            <FormattedMessage id="menu1" />
          </Link>
          <ExternalLink href="https://mjfirm.applicantpro.com/jobs/"
            className="my-2 block border pb-1 rounded  border-gray300 hover:bg-gray300 lg:hover:bg-transparent lg:border-mjgray lg:rounded-none lg:my-0 lg:pb-0 lg:mx-6 lg:inline-block lg:hover:text-yellowbutton transition duration-300 ease-in-out"
          >
            <FormattedMessage id="menu2" />
          </ExternalLink>
          <Link
            to={`/contact`}
            className="my-2 block border pb-1 rounded  border-gray300 hover:bg-gray300 lg:hover:bg-transparent lg:border-mjgray lg:rounded-none lg:my-0 lg:pb-0 lg:mx-6 lg:inline-block lg:hover:text-yellowbutton transition duration-300 ease-in-out"
            activeClassName="active-link"
          >
            <FormattedMessage id="menu3" />
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
