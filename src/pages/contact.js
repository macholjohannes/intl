import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import { ExternalLink } from 'react-external-link';
import SEO from "../components/seo"
import CenterHeader from "../components/centerheader"
import ContactForm from "../components/contactform"

const ContactPage = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "title_contact" })} />
    <CenterHeader />
    <div className="mx-4 my-4 md:mx-16 md:my-8 md:grid md:grid-cols-4 gap-16 lg:grid-cols-3">
        <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-4xl font-medium leading-normal mb-6"><FormattedMessage id="contact-us-title" /></h2>
            <p className="my-4"><FormattedMessage id="contact-us-txt1" /> <a href="tel:8667293328" aria-label="8 6 6. 7 2 9. 3 3 2 8.">(866) 729-3328</a>.</p>
            <div className="leading-6">
                <strong><FormattedMessage id="contact-us-toll-free" />:</strong> (866) 729-3328<br />
                <strong><FormattedMessage id="contact-us-general-fax" />:</strong> (866) 857-7527<br />
                <strong><FormattedMessage id="contact-us-email" />:</strong>  
                <a href="mailto:information@mjfirm.com"> information@mjfirm.com</a>
                <br />
                <strong><FormattedMessage id="contact-us-office-hours" />:</strong> Mon-Fri 8:00 AM - 5:30 PM (MST)
                <br />
              </div>
            <ContactForm />

        </div>
        <div className="md:col-span-2 lg:col-span-1 my-8 p-4 bg-graysidebar border-gray-300 rounded-md border">
            <div className="bg-yellowbutton font-bold text-xl uppercase m-2 p-1 pl-4 rounded-md w-auto mb-8 border border-grayfront hover:bg-grayfront hover:border-grayfront hover:text-white">
              <ExternalLink href="https://mjfirm.payweb360.com/">
              <FormattedMessage id="button1" />&nbsp;&raquo;
                </ExternalLink>
            </div>
            <div className="leading-5">

                <div>
                  <h3 className="font-bold my-2 pb-1"><FormattedMessage id="contact-us-locations" /></h3>
                </div>
                <div className=" mt-2 font-bold">
                  <h4 className="float-left">Colorado</h4> <ExternalLink href="https://maps.google.com/maps?q=700+17th+Street,+Denver,+CO&hl=en&ll=39.746134,-104.991467&spn=0.01051,0.01251&sll=39.746737,-104.991126&sspn=0.010509,0.01251&hnear=700+17th+St,+Denver,+Colorado+80202&t=m&z=16"><span className="text-xs text-blue01 underline pl-2">
                  <FormattedMessage id="contact-us-map" />
                  </span>
                  </ExternalLink>
                </div>
                <FormattedMessage id="contact-us-mailing-address" />: <br />
                  700 17th St<br />
                  Suite 200<br />
                  Denver, Colorado 80202<br />
                  <p><FormattedMessage id="contact-us-colorado" /></p>

                <div className="mt-2 font-bold">
                <h4>Idaho</h4>
                </div>
                <FormattedMessage id="contact-us-mailing-address" />: <br />
                  P.O. Box 170579<br />
                  Boise, ID 83717<br />

                <div className="mt-2 font-bold">
                <h4 className="float-left">New Mexico</h4> <ExternalLink href="https://www.google.com/maps/@35.1309768,-106.6016908,17z/data=!3m1!4b1!4m2!3m1!1s0x872274e9887946f3:0xabcbbe0717cef44c"><span className="text-xs text-blue01 underline pl-2"><FormattedMessage id="contact-us-map" /></span></ExternalLink>
                </div>
                <FormattedMessage id="contact-us-mailing-address" />: <br />
                4209 Montgomery Blvd. NE<br />
                Albuquerque, New Mexico 87109<br />

                <div className="mt-2 font-bold">
                <h4>Oklahoma</h4>
                </div>
                <FormattedMessage id="contact-us-mailing-address" />: <br />
                P.O. Box 21690<br />
                Oklahoma City, OK 73156<br />

                <div className="mt-2 font-bold">
                <h4>Oregon</h4>
                </div>
                <FormattedMessage id="contact-us-mailing-address" />: <br />
                700 17th St, Suite 200<br />
                Denver, Colorado 80202<br />

                <div className="mt-2 font-bold">
                <h4>Utah</h4>
                </div>
                <FormattedMessage id="contact-us-mailing-address" />: <br />
                PO Box 1178<br />
                American Fork, UT 84003<br />

                <div className="mt-2 font-bold">
                <h4 className="float-left">Washington</h4> <ExternalLink href="http://maps.google.com/maps?q=2800+156th+Avenue,+Suite+105,+Bellevue,+WA++98007&hl=en&sll=39.746763,-104.99114&sspn=0.04382,0.072184&vpsrc=0&gl=us&z=16&iwloc=A"><span className="text-xs text-blue01 underline pl-2"><FormattedMessage id="contact-us-map" /></span></ExternalLink>
                </div>
                <FormattedMessage id="contact-us-mailing-address" />: <br />
                2800 156th Avenue SE, Suite 105
                Bellevue, Washington 98007<br />

                <div className="mt-2 font-bold">
                <h4 className="float-left">Wyoming</h4> <ExternalLink href="https://www.google.com/maps/place/2232+Dell+Range+Blvd+%23103,+Cheyenne,+WY+82009/%4041.1605491,-104.7880348,17z/data=!3m1!4b1!4m5!3m4!1s0x876f3ba7ec44042b:0x666941338c30555f!8m2!3d41.1605491!4d-104.7858461?hl=en"><span className="text-xs text-blue01 underline pl-2"><FormattedMessage id="contact-us-map" /></span></ExternalLink>
                </div>
                <FormattedMessage id="contact-us-mailing-address" />: <br />
                2232 Dell Range Blvd, Suite 103<br />
                Cheyenne, Wyoming 82009<br />

			</div>
        </div>
    </div>
    
  </Layout>
)

export default injectIntl(ContactPage)
