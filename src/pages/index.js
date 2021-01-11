import React from "react"
import { Link } from "gatsby"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { ExternalLink } from 'react-external-link';
import Layout from "../components/layout"
import CenterHeader from "../components/centerheader"
import SEO from "../components/seo"
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"

const IndexPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`debt collection`, `debt collector`,]}
      />
      <CenterHeader />
      <div className="md:flex">
      <div className="md:relative flex-1 ml-4 md:ml-10 mr-4 mt-8 px-6 py-4 border border-gray300 rounded-lg">
        <div className="flex items-center h-10">
          <div>
            <img className="object-none h-32 w-full" src={icon1} alt="get a reply icon" />
          </div>
          <div>
            <h2 className="ml-4"><FormattedMessage id="box1-headline" /></h2>
          </div>
        </div>
        <p className="my-4"><FormattedMessage id="box1-text" /></p>
        <div>
          <button className="md:absolute md:bottom-4 h-auto px-4 py-2 m-2 border bg-blue01 text-white text-base rounded font-medium">
            <Link to="/contact" role="button"><FormattedMessage id="box1-button" />&nbsp;&raquo;
            </Link>
          </button>
        </div>
      </div>
      <div className="md:relative flex-1 mx-4 mt-8 px-6 py-4 border border-gray300 rounded-lg">
        <div className="flex items-center h-10">
          <div>
            <img className="object-none h-32 w-full" src={icon2} alt="work for us icon" />
          </div>
          <div>
            <h2 className="ml-4"><FormattedMessage id="box2-headline" /></h2>
          </div>
        </div>
        <p className="my-4"><FormattedMessage id="box2-text" /></p>
        <div className="min-h-0">
        <button className="md:absolute md:bottom-4 object-none object-bottom h-auto px-4 py-2 m-2 border bg-blue01 text-white text-base rounded font-medium">
        <ExternalLink href="https://mjfirm.applicantpro.com/jobs/"><FormattedMessage id="box2-button" />&nbsp;&raquo;
            </ExternalLink>
          </button>
        </div>
      </div>
      <div className="flex-1 mr-4 md:mr-10 ml-4 mt-8 border border-gray300 rounded-lg px-6 py-4">
        <div className="flex items-center h-10">
          <div>
            <img className="object-none h-32 w-full" src={icon3} alt="work for us icon" />
          </div>
          <div>
            <h2 className="ml-4"><FormattedMessage id="box3-headline" /></h2>
          </div>
        </div>
        <div className="block">
          <p className="my-4"><FormattedMessage id="box3-text" /></p>
        </div>
        <div className="align-text-bottom">
        <button className="h-auto px-4 py-2 m-2 border bg-blue01 text-white text-base rounded font-medium">
            <ExternalLink href="https://mjfirm.payweb360.com/">
            <FormattedMessage id="box3-button" />&nbsp;&raquo;
            </ExternalLink>
          </button>
          </div>
      </div>
    </div>
    </Layout>
  )
}

export default IndexPage
