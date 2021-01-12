import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"


const PrivacyPage = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "privacy-policy" })} />
      <div className="mx-24 my-8">
      
        <FormattedMessage id="privacy-policy-text"
        values={{
          subtitle: chunks => ( 
            <p>
              <strong className="font-medium">
                {chunks}
              </strong>
            </p>
          ),
          headline: chunks => (
            <h1>
              {chunks}
            </h1>
          ),
          p: chunks => (
            <p>
              {chunks}
            </p>
          ),
          indent: chunks => (
            <div className="ml-4">
              {chunks}
            </div>
          ),
        }} />

            <p>
              <span  className="font-medium">
                Machol &amp; Johannes, LLC
              </span>
              <br />
                www.mjfirm.com
              <br />
                700 17th Street, Suite 200; Denver, CO 80202
              <br />
                (866) 729-3328
              <br />
              <Link to="/contact" className="text-blue01 underline  font-medium">
                <FormattedMessage id="contact-us-title" />
              </Link>
            </p>


            <p className="italic font-medium">
            <FormattedMessage id="privacy-update" />
            </p>

      </div>
  </Layout>
)

export default injectIntl(PrivacyPage) 
