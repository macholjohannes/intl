import React from "react"
import { FormattedMessage, injectIntl, navigate, Link } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import { ExternalLink } from 'react-external-link';
import SEO from "../components/seo"
import CenterHeader from "../components/centerheader"
import ContactForm from "../components/contactform"

const ContactPage = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "title_Contact" })} />
    <CenterHeader />
    <div className="mx-16 my-8 md:grid md:grid-cols-4 gap-16 lg:grid-cols-3">
        <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-4xl font-medium leading-normal mb-6"><FormattedMessage id="contact-us-title" /></h2>
            <p className="my-4"><FormattedMessage id="contact-us-txt1" /></p>

            <ContactForm />

        </div>
        <div className="md:col-span-2 lg:col-span-1 my-8 p-4 bg-graysidebar border-gray-300 rounded-md border">
            <div className="bg-yellowbutton font-bold text-xl uppercase m-2 p-2 pl-6 rounded-md w-auto mb-8">
              <ExternalLink href="https://mjfirm.payweb360.com/">
              <FormattedMessage id="button1" />&nbsp;&raquo;
                </ExternalLink>
            </div>
            <div className="leading-6">
                <strong><FormattedMessage id="contact-us-toll-free" />:</strong> (866) 729-3328<br />
                <strong><FormattedMessage id="contact-us-general-fax" />:</strong> (866) 857-7527<br />
                <strong><FormattedMessage id="contact-us-email" />:</strong>  
                <a href="mailto:information@mjfirm.com"> information@mjfirm.com</a>
                <br />
                <strong><FormattedMessage id="contact-us-office-hours" />:</strong> Mon-Fri 8:00 AM - 5:30 PM (MST)
                <br />
                <strong><FormattedMessage id="contact-us-mailing-address" />:</strong> <br />
                  700 17th St<br />
                  Suite 200<br />
                  Denver, Colorado 80202<br />
			</div>
        </div>
    </div>
    
  </Layout>
)

export default injectIntl(ContactPage)
