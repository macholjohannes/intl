import React from "react"
import PropTypes from "prop-types"
import {  Link  } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-intl"
import { injectIntl } from "gatsby-plugin-intl"

import Header from "./header"

const Layout = ({ children, intl }) => {
  return (
    <>
      <Header siteTitle={intl.formatMessage({ id: "title" })} />
        <main>{children}</main>
        <footer className="px-12 py-8 my-8 text-center text-sm bg-grayfooter leading-6">
          © 2011 - {new Date().getFullYear()} <FormattedMessage id="footer-line1" />
            <br />
            <FormattedMessage id="footer-line2" />
            <br />
            <span className="font-medium">
            <FormattedMessage id="footer-line3" />
            </span>
            <div className="m-2 text-blue01">
              <Link to="/privacy" className="text-blue01 underline mx-2 my-1 font-medium hover:text-gray300">
              <FormattedMessage id="privacy-policy" />
              </Link>
                | 
              <Link to="/terms" className="text-blue01 underline mx-2 my-1 font-medium hover:text-gray300">
              <FormattedMessage id="terms-and-conditions" />
              </Link>
            </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)
