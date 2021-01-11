import { FormattedMessage, Link } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { ExternalLink } from "react-external-link"
import Image2 from "./mjlogo"
import Language from "./language"

function Header ({ siteTitle })  {

  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="font-sans flex items-center justify-between flex-wrap bg-mjgray py-4 px-6">
      <div className="w-1/2 md:w-2/6  md:ml-6">
        <div className="">
          <Link to={`/`}><Image2 className="w-2 object-contain h-8" /></Link>
        </div>
      </div>
      <div className="flex justify-between lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="order-last px-4 py-2 mb-2 border rounded text-black border-grayoutline hover:text-white hover:border-white"
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
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-3/4 ml-28 block flex-grow lg:flex lg:items-center text-lg mb-2 font-medium lg:w-auto`}
      >
        <div className="lg:flex-grow">
          <Link
            to={`/`}
            href="#responsive-header"
            className="block mt-4 pb-1 lg:ml-6 lg:inline-block lg:mt-0 hover:border-b-1  hover:border-black text-black hover:text-white mr-8"
            activeClassName="active-link"
          >
            <FormattedMessage id="menu1" />
          </Link>
          <ExternalLink href="https://mjfirm.applicantpro.com/jobs/"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-8"
          >
            <FormattedMessage id="menu2" />
          </ExternalLink>
          <Link
            to={`/Contact`}
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white"
            activeClassName="active-link"
          >
            <FormattedMessage id="menu3" />
          </Link>
        </div>
      </div>
      <Language />
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
